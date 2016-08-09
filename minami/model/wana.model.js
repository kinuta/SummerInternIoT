var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var db = mongoose.createConnection("mongodb://localhost:27017/wana", function (err) {
   if(err){
       console.log('db fail connection to mongodb://localhost:27017/wana');
   }else{
       console.log('db connected to mongodb://localhost:27017/wana');
   }
});

var wanaSchema = new mongoose.Schema({ 
	edisonCode: String,
	Date : Date,
	isConnected: Boolean
});

exports.wanas = db.model('wana', wanaSchema);