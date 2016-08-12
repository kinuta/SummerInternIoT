var servoModule = require("jsupm_servo");

var servo1 = new servoModule.ES08A(3);
var servo2 = new servoModule.ES08A(5);
var servo3 = new servoModule.ES08A(6);
var servo4 = new servoModule.ES08A(9);
var servo5 = new servoModule.ES08A(11);

var timeOffSet = 2000;

function setServoAngle(servo,angle){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*90);
	setTimeout(function(){
		setServoAngle(servo,nextAngle);
	},timeOffSet);
}

console.log("start simasu get ready~")

setTimeout(function(){
		setServoAngle(servo1,90);
		setServoAngle(servo2,90);
		setServoAngle(servo3,90);
		setServoAngle(servo4,90);
		setServoAngle(servo5,0);

},1000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
