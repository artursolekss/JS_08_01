const express = require("express");
const app = express();
const cors = require("cors");
const querystring = require('node:querystring');
const randomstring = require("randomstring");
const request = require('request');
const fs = require("fs");

const bodyParser = require("body-parser");
app.use(cors({ origin: ["http://localhost:5000"] }));

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

let client_id; // = '899582c259f64dcebc05e6bb4d83828d';
const redirect_uri = 'http://localhost:5000/callback';
let client_secret; // = '677d46bca6664e88b7c9cbd8325c321c';


// let client_secret, client_id;
app.get('/login', function(req, res) {

    client_id = req.query.client_id;
    client_secret = req.query.client_secret;
    var state = randomstring.generate(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({ ///response_type=code&client_id=....
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

app.get('/callback', function(req, res) {

    var code = req.query.code || null;
    var state = req.query.state || null;

    if (state === null) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };
        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                const base_url = "http://localhost:5000";
                res.redirect(base_url + "?token=" + access_token);
            }
        });

    }
});

app.get('/', function(req, res) {
    fs.readFile('../frontend/artistinfo.html', function(err, html) {
        res.write(html);
        res.end();
    })
})

app.get('/script', function(req, res) {
    fs.readFile('scripts/script.js', function(err, script) {
        res.write(script);
        res.end();
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})