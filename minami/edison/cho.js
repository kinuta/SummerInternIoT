var mraa = require('mraa');
var sleep = require('sleep');
var μs = require('microseconds');

// GPIO
// trigger pin: send trigger signal
var trigPin = new mraa.Gpio(8);
trigPin.dir(mraa.DIR_OUT);

// echo pin: receive echo from module
var echoPin = new mraa.Gpio(7);
echoPin.dir(mraa.DIR_IN);

var LOW  = 0;
var HIGH = 1;

function pulseIn(pin, value, timeout) {
    timeout = timeout || 1000000;

    var pulseOn, pulseOff;

    var start = μs.now();

    while (pin.read() != value) {
        if (μs.since(start) > timeout) {
            return 0;
        }
        pulseOn = μs.now();
    }
    while (pin.read() == value) {
        if (μs.since(start) > timeout) {
            return 0;
        }
        pulseOff = μs.now();
    }
    // duration[microsec]
    var duration = pulseOff - pulseOn;

    return duration;
}

setInterval( function () {
    // Send Trigger Signal to Module
    trigPin.write(LOW);
    sleep.usleep(2);
    trigPin.write(HIGH);
    sleep.usleep(5);
    trigPin.write(LOW);

    // Measure duration of echo pulse
    var duration = pulseIn(echoPin, HIGH);

    // Calculate Distance from duration
    var distance = duration / 29 / 2;

    if (distance > 0) {
        // Show the distance on the console
        console.log(distance + ' cm');
    }
    console.log(distance + ' cm')
}, 100);
