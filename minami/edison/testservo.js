var servoblaster = require('servoblaster');
 
var stream = servoblaster.createWriteStream(5); // Open pin 7 (optional) 

stream.write('100%'); 
