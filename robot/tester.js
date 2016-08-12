var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(9);

var timeOffSet = 2000;

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
		setServoAngle(servo,180);
},1000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
