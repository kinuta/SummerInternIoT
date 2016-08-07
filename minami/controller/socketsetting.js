var config = require('config.json');
var lightandtempController = require('controller/lightandtempController');

exports = module.exports = function(io){

	io.use(function(socket, next){//socket連結の認証検査
	    console.log("Query: ", socket.handshake.query);
	    // return the result of next() to accept the connection.
	    if (socket.handshake.query.edisonCode == config.code) {
	        return next();
	    }
	    // call next() with an Error if you need to reject the connection.
	    next(new Error('Authentication error'));
	});

	io.on('connection', function(socket){
	  console.log('edison connected');
	  socket.on('sendData',function(data){
	  	console.log("data sended")
	  	console.dir(data);
	  	
	  })
	});
  
}