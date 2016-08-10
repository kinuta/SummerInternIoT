var config = require('config.json');
var wanaService = require('service/wana.service.js');
var mailService = require('service/mail.service.js');
var _ = require('underscore');

exports = module.exports = function(io){

	io.use(function(socket, next){//socket連結の認証検査
	    console.log("Query: ", socket.handshake.query);
	    // return the result of next() to accept the connection.
	    if (socket.handshake.query.serverPW == config.serverPW) {
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

			wanaService.saveData(_.omit(data, 'edisonType'))
			.then(function () {
				console.log("save data success")
			    res.sendStatus(200);
			})
			.catch(function (err) {
			    res.status(400).send(err);
			});

		})

		socket.on('sendDanger',function(data){
			console.log("Danger detected!!!!!!")
			console.dir(data);

			mailService.wanamail(data)
			.then(function (result) {
				if(result==true){
					console.log("send mail success")
				    res.sendStatus(200);
				}else{
			    	res.status(400).send(err);					
				}
			})
			.catch(function (err) {
			    res.status(400).send(err);
			});


		})
	});
  
}