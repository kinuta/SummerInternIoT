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
	console.log("send Data");

	var dt    = new Date();// 現在時刻の取得
	dt.setTime(dt.getTime() + 32400000); // 1000 * 60 * 60 * 9(hour)	// 日本の時間に修正

	socket.emit('sendData', {
		Date : dt,
		Light : Light,
	 	Temp : Temp 
	});
	setTimeout(sendData,5000);
}