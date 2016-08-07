var mraa = require("mraa");

var LightSensor = new mraa.Aio(0);
var TempSensor = new mraa.Aio(1);

var Light = LightSensor.read();
var Temp = TempSensor.read();

setInterval(function () {
  Light = LightSensor.read();
  Temp = TempSensor.read();
}, 1000);

var socket = require('socket.io-client')('http://192.168.0.23:3000', { query: "edisonCode=kdrl" });

socket.on('connect',function(){ 
    console.log("connected")
    sendData();
});

function sendData(){
	socket.emit('sendData', {
		Light : Light,
	 	Temp : Temp 
	});
	setTimeout(sendData,1000);
}