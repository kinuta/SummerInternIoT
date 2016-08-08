var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');
var path = require('path');

router.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, '../view', 'register.html'));
});

router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/user/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
          console.log(error);
            return res.sendFile(path.join(__dirname, '../view', 'register.html'));
        }

        if (response.statusCode !== 200) {
            return res.sendFile(path.join(__dirname, '../view', 'register.html'));
        }

        // return to login page with success message
        req.session.success = 'Registration successful';
        return res.redirect('/login');
    });
});

module.exports = router;