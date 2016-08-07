var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version
  
var myDigitalPin = new m.Gpio(13); //setup digital read on pin 13
myDigitalPin.dir(m.DIR_OUT); //set the gpio direction to output
  
var light = 0;
  
loop();
  
function loop(){
        light = (light == 0 ? 1 : 0);
        if(light){console.log("HIGH")}else{console.log("LOW")}
        myDigitalPin.write(light);
        setTimeout(loop,1000);
}
