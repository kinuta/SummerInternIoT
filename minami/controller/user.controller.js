var express = require('express');
var router = express.Router();
var userService = require('service/user.service.js');

// routes
router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);
router.post('/getmyinfo', getmyinfo);

module.exports = router;

function authenticateUser(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function (token) {
            if (token) {
            	console.log("token")
                // authentication successful
                res.send({ token : token });
            } else {
            	console.log("no token")
                // authentication failed
                res.sendStatus(401);
            }
        })
        .catch(function (err) {
        	console.log("error")
            res.status(400).send(err);
        });
}

function registerUser(req, res) {
    userService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getmyinfo(req, res) {
    console.dir(req.body);
    userService.getmyinfo(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}