var edisonCode = "kdrl";
var mraa = require("mraa");

var OutPin = new mraaGpio(7);
var InPin = new mraa.Aio(0);

var isConnected = (InPin.read()>600?1:0);

setInterval(function () {//これより1秒間隔でセンサーの値を取ってくることとなる
  isConnected = (InPin.read()>600?1:0);
  console.log(isConnected)
}, 1000);

// var socket = require('socket.io-client')('http://192.168.0.23:3000', { query: "edisonCode="+edisonCode });

// socket.on('connect',function(){ 
//     console.log("connected")
//     sendData();
// });

// function sendData(){
// 	console.log("send Data");

// 	var dt    = new Date();// 現在時刻の取得
// 	dt.setTime(dt.getTime() + 32400000); // 1000 * 60 * 60 * 9(hour)	// 日本の時間に修正

// 	socket.emit('sendData', {
// 		edisonCode:edisonCode,
// 		Date : dt,
// 		Light : Light,
// 	 	Temp : Temp 
// 	});
// 	setTimeout(sendData,5000);//5秒に一回送信する(５秒間の平均を送るように工夫を入れたい)
// }