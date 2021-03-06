//Load servo module.
var servoModule = require("jsupm_servo");

//Instantiate ES08A Servo module on GPIO 5
var servo1 = new servoModule.ES08A(5);
//var servo2 = new servoModule.ES08A(8);
//var servo3 = new servoModule.ES08A(9);
//var servo4 = new servoModule.ES08A(10);
console.dir(servoModule)
// function to initialize servo
    // timeOffset: how long after hitting "run"
    //		should we start this servo instance
    // timeInterval: how frequently should this instance run after timeOffset
    // angle: the angle for this instance
function startServo(timeOffset, timeInterval, angle)
{
    // Start running this instance after timeOffset milliseconds
    setTimeout(function()
    {
        // run this instance every timeInterval milliseconds
        setInterval(function()
        {
            servo1.setAngle(angle);
            servo2.setAngle(angle);
            servo3.setAngle(angle);
            servo4.setAngle(angle);
            console.log("Set angle to " + angle);
        }, timeInterval);
    }, timeOffset);
    // timeOffset tells setTimeout when
    //		to execute the function specified in the first param
    // angle is passed as a param to the specified function
}
// start immediately, run every 3 seconds, go 0 degrees
//startServo(0, 3000, 0);

// // start in 1 second, run every 3 seconds, go 90 degrees
// startServo(1000, 3000, 90);

// // start in 2 seconds, run every 3 seconds, go 180 degrees
// startServo(2000, 3000, 180);

// Print message when exiting
process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});
