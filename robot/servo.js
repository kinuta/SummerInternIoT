var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(5);

var timeOffSet = 3000;

function setServoAngle(angle, timeOffSet){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*180);

	setTimeout(setServoAngle(nextAngle, timeOffSet), timeOffSet);
}

console.log("start simasu")
setTimeout(setServoAngle(0, timeOffSet), 100000000000000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
