var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(5);

function setServoAngel(servo, angle, timeOffSet){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*180);
	setTimeout(setServoAngel(servo, nextAngle), timeOffSet);
}

startServo(servo, 0, 3000);//初めは0から

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
