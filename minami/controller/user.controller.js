var express = require('express');
var async = require('async');
var _ = require('underscore');
var router = express.Router();
var userService = require('service/user.service.js');
var wanaService = require('service/wana.service.js');

// routes
router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);
router.get('/getuser', getuser);
router.get('/getbriefwanasdata', getbriefwanasdata);
router.post('/addwanaedison', addwanaedison);

module.exports = router;

function addwanaedison(req, res) {
    console.log("usercontroller addwanaedison")
    console.dir(req.user.email,req.body)
    userService.addwanaedison(req.user.email,req.body)
        .then(function (result) {
            res.send(result);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getbriefwanasdata(req, res) {
    console.log("getbriefwanasdata start")
    var asynccounter = 0;

    async.waterfall([
        function(callback) {
            userService.getbriefwanasdata(req.user.email)
                .then(function (briefWanasData) {
                    callback(null, briefWanasData);
                })
                .catch(function (err) {
                    res.status(400).send(err);
                });
        },
        function(briefWanasData,callback) {
            _.each(briefWanasData,function(briefWanaData,index){
                wanaService.iswanaconnected(briefWanaData.edisonCode)
                .then(function (result) {
                    briefWanaData.isConnected = result;
                    asynccounter++;
                    if(asynccounter == briefWanasData.length){
                        console.log("go next")
                        callback(null, briefWanasData);
                    }
                })
                .catch(function (err) {
                    console.log("error")
                    res.status(400).send(err);
                });
            });
        },
      ],

      function(err, briefWanasData) {
        if(err) { console.log(err); res.send(500,"Server Error"); return; }
        //console.log("getbriefwanasdata DONE")
        res.send(briefWanasData);
      }
    );
    
}

function authenticateUser(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function (token) {
            if (token) {
            	console.log("authenticateUser이성공함. token은 "+token)
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

function getuser(req, res) {
    userService.getuser(req.user.email)
        .then(function (userData) {
            res.send(userData);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}