var servoModule = require("jsupm_servo");

var servo1 = new servoModule.ES08A(5);
var servo2 = new servoModule.ES08A(6);

var timeOffSet = 500;

function setServoAngle(servo,angle){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*180);
	setTimeout(function(){
		setServoAngle(servo,nextAngle);
	},timeOffSet);
}

console.log("start simasu get ready~")

setTimeout(function(){
		setServoAngle(servo1,0);
		setServoAngle(servo2,0);
},1000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
