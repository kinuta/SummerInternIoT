var edisonCode = "kdrl";
var mraa = require("mraa");

var LightSensor = new mraa.Aio(0);
var TempSensor = new mraa.Aio(1);

var Light = LightSensor.read();
var Temp = TempSensor.read();

setInterval(function () {//これより1秒間隔でセンサーの値を取ってくることとなる
  Light = LightSensor.read();
  Temp = TempSensor.read();
}, 1000);

var socket = require('socket.io-client')('http://192.168.0.23:3000', { query: "edisonCode="+edisonCode });

socket.on('connect',function(){ 
    console.log("connected")
    sendData();
});

function sendData(){
	console.log("send Data");

	var dt    = new Date();// 現在時刻の取得
	dt.setTime(dt.getTime() + 32400000); // 1000 * 60 * 60 * 9(hour)	// 日本の時間に修正

	socket.emit('sendData', {
		edisonCode:edisonCode,
		Date : dt,
		Light : Light,
	 	Temp : Temp 
	});
	setTimeout(sendData,5000);//5秒に一回送信する(５秒間の平均を送るように工夫を入れたい)
}