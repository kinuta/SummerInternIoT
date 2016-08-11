var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(5);

var timeOffSet = 3000;

function setServoAngle(angle, timeOffSet){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*180);
	setTimeout(function(){
		setServoAngle(nextAngle, timeOffSet);
	},3000);
}

console.log("start simasu get ready~")

setTimeout(function(){
		setServoAngle(nextAngle, timeOffSet);
},1000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
