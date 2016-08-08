#!/usr/bin/env node
require('rootpath')();
var path = require('path');

var config = require('config.json');

var express = require('express');
var expressJwt = require('express-jwt');
var app = express();

var bodyParser = require('body-parser');//htmlでpostの処理に必要

var http = require('http').Server(app);
var io = require('socket.io')(http);
require('controller/socket.controller.js')(io);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//session
var session = require('express-session');
app.use(session({ 
	secret: config.secret, 
	resave: false, 
	saveUninitialized: true,
	cookie: {
    	maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
    }
}));

// use JWT auth to secure the api
app.use('/api', expressJwt({ 
	secret: config.secret
}).unless({ path: ['/api/user/authenticate', '/api/user/register'] }));

// routes
app.use('/app', require('controller/app.controller.js'));
app.use('/login', require('controller/login.controller.js'));
app.use('/api/user', require('controller/user.controller.js'));
app.use('/register', require('controller/register.controller'));
app.get('/', function(req, res) {// make '/app' default route
  return res.redirect('/app');
});

// Handle 404 error. 
app.use("*",function(req,res){
  res.status(404);
  res.send('404<br>There is no file!!!!!');
  res.end();
});

http.listen(config.port,function(){
    console.log("server listening on port : ", config.port)
});