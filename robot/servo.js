var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(5);

var timeOffSet = 500;

function setServoAngle(angle){
	servo.setAngle(angle);
	console.log("Set angle to " + angle);
	var nextAngle = Math.floor(Math.random()*180);
	setTimeout(function(){
		setServoAngle(nextAngle);
	},timeOffSet);
}

console.log("start simasu get ready~")

setTimeout(function(){
		setServoAngle(0);
},1000);

process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
