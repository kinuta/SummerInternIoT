var socket = require('socket.io-client')('http://192.168.0.23:3000');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});