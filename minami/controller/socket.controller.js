var config = require('config.json');
var wanaService = require('service/wana.service.js');
var _ = require('underscore');

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
	  console.log('edison '+socket.handshake.query.edisonCode+' connected');
	  socket.on('sendData',function(data){
	  	console.log("data sended")
	  	console.dir(data);

			wanaService.saveData(_.omit(data, 'edisonType'))
			.then(function () {
				console.log("save data success")
			    res.sendStatus(200);
			})
			.catch(function (err) {
			    res.status(400).send(err);
			});

	  })
	});
  
}