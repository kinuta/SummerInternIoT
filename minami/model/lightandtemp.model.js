var mongoose = require('mongoose');
var db = mongoose.createConnection("mongodb://localhost:27017/lightandtemp", function (err) {
   if(err){
       console.log('db fail connection to mongodb://localhost:27017/lightandtemp');
   }else{
       console.log('db connected to mongodb://localhost:27017/lightandtemp');
   }
});

var lightandtempSchema = new mongoose.Schema({ 
	Date : Date,
	Light : Number, 
	Temp : Number 
});

exports.lightandtemps = db.model('lightandtemp', lightandtempSchema);