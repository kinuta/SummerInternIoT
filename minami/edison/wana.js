var serverPW = "serverPW";
var edisonCode = "secondEdison";
var edisonType = "wana";
var mraa = require("mraa");

var OutPin = new mraa.Gpio(7);
var InPin = new mraa.Aio(0);
OutPin.dir(mraa.DIR_OUT);
OutPin.write(1);

var isConnected = (InPin.read()>600?true:false);

setInterval(function () {//これより1秒間隔でセンサーの値を取ってくることとなる
  var tmpisConnected = isConnected;
  isConnected = (InPin.read()>600?true:false);
  if(tmpisConnected == true && isConnected == false){
  	sendDanger();
  }
  console.log(isConnected)
}, 1000);

var socket = require('socket.io-client')('http://192.168.0.23:3000', { query: "serverPW="+serverPW });


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
		edisonType:edisonType,
		Date : dt,
		isConnected: isConnected
	});
	setTimeout(sendData,5000);//5秒に一回送信する(５秒間の平均を送るように工夫を入れたい)
}

function sendDanger(){
	console.log("send Danger");

	var dt    = new Date();// 現在時刻の取得
	dt.setTime(dt.getTime() + 32400000); // 1000 * 60 * 60 * 9(hour)	// 日本の時間に修正

	socket.emit('sendDanger', {
		edisonCode:edisonCode,
		edisonType:edisonType,
		Date : dt,
	});
	
}
