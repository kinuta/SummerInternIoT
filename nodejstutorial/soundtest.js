var m = require('mraa');
// Do a sanity check to make sure that MRAA is loaded
console.log('MRAA Version: ' + m.getVersion());

// Declare your sensor as an analog input
var soundSensor = new m.Aio(0);

// Set the sound threshold
var threshold = 50;  
var soundValue = 0;

// Declare the sound check function
function checkSoundLevels(){
  // read the value to start off
  soundValue = soundSensor.read();

  // Check If the sound is higher than the sthreshold
  if(soundValue >= threshold){
    console.log("BIG " + soundValue);
    setTimeout(checkSoundLevels, 10);
  } else {
    console.log("SMALL " + soundValue);
    setTimeout(checkSoundLevels, 10);
  }
}

// Run the function to start out
checkSoundLevels();
