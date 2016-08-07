#!/usr/bin/env node
require('rootpath')();
var path = require('path');

var config = require('config.json');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socketsetting = require('controller/socketsetting.js')(io)
var expressRouter = require('controller/router.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', expressRouter);

// Handle 404 error. 
app.use("*",function(req,res){
  res.status(404);
  res.send('404<br>There is no file!!!!!');
  res.end();
});

http.listen(config.port,function(){
    console.log("server listening on port : ", config.port)
});