const express = require("express");
const app = express();
const cors = require("cors");
const querystring = require('node:querystring');
const randomstring = require("randomstring");
const request = require('request');

const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

const client_id = '899582c259f64dcebc05e6bb4d83828d';
const redirect_uri = 'http://localhost:5000/callback';
const client_secret = '677d46bca6664e88b7c9cbd8325c321c';

app.get('/login', function(req, res) {

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
                res.send({
                    'access_token': access_token
                });
            }
        });

    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})