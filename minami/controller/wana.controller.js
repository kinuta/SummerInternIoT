var express = require('express');
var router = express.Router();
var wanaService = require('service/wana.service.js');

// routes
router.post('/getdetaildata', getdetaildata);

module.exports = router;

function getdetaildata(req, res) {
    console.dir('getdetaildata started with params below')
    console.dir(req.body)
    wanaService.getdetaildata(req.body.edisonCode)
        .then(function (wanasData) {
            res.send(wanasData);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
