#!/usr/bin/env node
require('rootpath')();
var path = require('path');

var config = require('config.json');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var expressRouter = require('router.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', expressRouter);

// Handle 404 error. 
app.use("*",function(req,res){
  res.status(404);
  res.send('404<br>There is no file!!!!!');
  res.end();
});

io.use(function(socket, next){
    console.log("Query: ", socket.handshake.query);
    // return the result of next() to accept the connection.
    if (socket.handshake.query.edisonCode == "kdrl") {
        return next();
    }
    // call next() with an Error if you need to reject the connection.
    next(new Error('Authentication error'));
});

io.on('connection', function(socket){
  console.log('kdrl\'s edison connected');
  
});

http.listen(config.port,function(){
    console.log("server listening on port : ", config.port)
});