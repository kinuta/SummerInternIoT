var config = require('config.json');
var mongoose = require('mongoose');
var db = mongoose.createConnection("mongodb://localhost:27017/user", function (err) {
   if(err){
       console.log('db fail connection to mongodb://localhost:27017/user');
   }else{
       console.log('db connected to mongodb://localhost:27017/user');
   }
});

var userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String
});

exports.users = db.model('user', userSchema);