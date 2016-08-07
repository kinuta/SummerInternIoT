var m = require('mraa');

// Do a sanity check to make sure that MRAA is loaded
console.log('MRAA Version: ' + m.getVersion());

// Declare your sensor as an analog input
var soundSensor0 = new m.Aio(0);
var soundSensor1 = new m.Aio(1);
var soundSensor2 = new m.Aio(2);

var myDigitalPin = new m.Gpio(13); //setup digital read on pin 13
myDigitalPin.dir(m.DIR_OUT); //set the gpio direction to output

// Set the sound threshold
var threshold = 50;  

// Run the function to start out
checkSoundLevels();

// Declare the sound check function
function checkSoundLevels(){
  // read the value to start off
  var soundValue = (soundSensor0.read()+soundSensor1.read()+soundSensor2.read())/3.0;
  
  // Check If the sound is higher than the sthreshold
  if(soundValue >= threshold){
    console.log("over50 "+soundValue);
    myDigitalPin.write(1);
    setTimeout(checkSoundLevels, 100);
  } else {
    console.log("under50 "+soundValue);
    myDigitalPin.write(0);
    setTimeout(checkSoundLevels, 100);
  }
}