var mraa = require("mraa");
// LCD Classを定義
var LCD  = require("jsupm_i2clcd");
 
// LCDを初期化。0x3EはLCD_ADDRESS,0x62はRGB_ADDRESS。
var myLCD = new LCD.Jhd1313m1(6, 0x3E, 0x62);

// A0に接続されたLight Sensorを定義
var LightSensor = new mraa.Aio(0);
// A1に接続されたTemp Sensorを定義
var TempSensor = new mraa.Aio(1);

setInterval(function () {
  var Light = LightSensor.read();
  var Temp = TempSensor.read();
  // バックライト色を指定
  myLCD.setColor(255, 255, 255);
  // 配置(row,column)を指定
  myLCD.setCursor(0,0);
  // LCDに書き出し
  myLCD.write("Light: " + Light);
  // 配置(row,clumn)を指定
  myLCD.setCursor(1,0);
  // LCDに書き出し 
  myLCD.write("Temp: " + Temp);
}, 1000);