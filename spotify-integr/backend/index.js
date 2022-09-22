const express = require("express");
const app = express();
const cors = require("cors");
const querystring = require('node:querystring');
const randomstring = require("randomstring");
const request = require('request');
const fs = require("fs");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

const redirect_uri = process.env.DOMAIN_URL + '/callback';

app.get('/login', function(req, res) {

    client_id = process.env.CLIENT_ID;
    client_secret = process.env.CLIENT_SECRET;
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
    client_id = process.env.CLIENT_ID;
    client_secret = process.env.CLIENT_SECRET;

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
                'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };
        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                const base_url = process.env.DOMAIN_URL;
                res.redirect(base_url + "?token=" + access_token);
            }
        });

    }
});

app.get("/getArtist", async function(req, res) {
    const token = req.query.token;
    const artist = req.query.artist;
    const requestParam = {
        url: "https://api.spotify.com/v1/search?q=" + artist + "&type=artist",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true
    }

    const artstsResp = await makeRequest(requestParam);
    return res.send(JSON.stringify(artstsResp));
})

function makeRequest(requestParam) {
    return new Promise(function(resolve, reject) {
        request(requestParam, function(err, resp, body) {
            if (!err && resp.statusCode === 200) {
                resolve(body);
            } else {
                reject(err);
            }
        })
    })
}

app.get("/testRequest", async function(req, res) {

    const result = await testPromise();
    res.send(result);
})

function testPromise() {
    return new Promise(function(resolve, reject) {
        callbackFunction(function(res) {
            resolve(res);
        })
    })
}

function getHeader() {
    return fs.promises.readFile("../frontend/header.html", { encoding: "utf8" });
}

app.get('/', async function(req, res) {
    const headerHtml = await getHeader();
    fs.readFile('../frontend/index.html', function(err, html) {
            res.write(headerHtml + html);
            res.end();
        })
        ///some other
})

app.get("/artists", async function(req, res) {

    const headerHtml = await getHeader();
    fs.readFile('../frontend/artists.html', function(err, html) {
        res.write(headerHtml + html);
        res.end();
    })
})

app.get('/scripts/script.js', function(req, res) {
    fs.readFile('scripts/script.js', function(err, script) {
        res.write(script);
        res.end();
    })
})

app.get('/scripts/artists.js', function(req, res) {
    fs.readFile('scripts/artists.js', function(err, script) {
        res.write(script);
        res.end();
    })
})

app.get('/styles/style.css', function(req, res) {
    fs.readFile('styles/style.css', function(err, style) {
        res.write(style);
        res.end();
    })
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})