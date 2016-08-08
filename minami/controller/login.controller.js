var config = require('config.json');
var express = require('express');
var router = express.Router();
var path = require('path');

var request = require('request');

router.get('/', function (req, res) {
    // log user out
    delete req.session.token;

    res.sendFile(path.join(__dirname, '../view', 'login.html'));
});

router.post('/', function (req, res) {
    // authenticate using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + "/user/authenticate",
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log("error")
          return res.sendFile(path.join(__dirname, '../view', 'login.html'));
        }

        if (!body.token) {
            console.log("!body.token")
          return res.sendFile(path.join(__dirname, '../view', 'login.html'));
        }

        // save JWT token in the session to make it available to the angular app
        req.session.token = body.token;

        // redirect to returnUrl
        var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
        res.redirect(returnUrl);
    });
});

module.exports = router;
