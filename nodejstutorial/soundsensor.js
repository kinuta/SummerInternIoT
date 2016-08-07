var m = require('mraa');

// Do a sanity check to make sure that MRAA is loaded
console.log('MRAA Version: ' + m.getVersion());

// Declare your sensor as an analog input
var soundSensor = new m.Aio(0);

// Set the sound threshold
var threshold = 800;  

// Run the function to start out
checkSoundLevels();

// Declare the sound check function
function checkSoundLevels(){
  // read the value to start off
  var soundValue = soundSensor.read();

  // If the sound is higher than the threshold, make the request
  if(soundValue >= threshold){
    console.log("over800 "+soundValue);
    setTimeout(checkSoundLevels, 100);
  } else {
    console.log("over800 "+soundValue);
    setTimeout(checkSoundLevels, 100);
  }
}