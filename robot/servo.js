var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(5);

function setServoAngle(servo, angle, timeOffSet){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*180);
	setTimeout(setServoAngle(servo, nextAngle, timeOffSet), timeOffSet);
}

setServoAngle(servo, 0, 3000000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
