var config = require('config.json');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport((smtpTransport({
  host: 'smtp.gmail.com',
  secureConnection: false, // use SSL
  port: 587, // port for secure SMTP
  auth: {
    user: '2016monkeygo@gmail.com',
    pass: 'minami2016'
  }
})));

var jwt = require('jsonwebtoken');
var Q = require('q');

var usersModel = require('model/user.model.js'),
    users = usersModel.users;

var _ = require('underscore');

var service = {};

service.wanamail = wanamail;

module.exports = service;

function wanamail(data){
	var deferred = Q.defer();
	var asynccounter = 0;

	users.find({'wanaEdison': {$elemMatch: {edisonCode: data.edisonCode}}}, function (err, users) {
	    if (err) {
	        console.log("error")
	        deferred.reject(err);
	    }else{
			_.each(users,function(user){
				asynccounter++;
				var mailOptions = {
					from: 'MonkeyGO <2016monkeygo@gmail.com>',
					to: user.email,
					subject: 'お客様へのお知らせ(罠センサー) by MonkeyGO',
					text: 'いつもお世話になっております。'+user.firstName+' '+user.lastName+'様の罠センサー(edisonCode: '+data.edisonCode+')が作動しました。より詳しい情報は http://192.168.12.40:3000 より確認してください。'
				};
				sendmail(mailOptions);
				if(asynccounter == users.length){
					deferred.resolve(true);  
				}
			})	       
	    }
	})
	return deferred.promise;

}

function sendmail(mailOptions){
	transport.sendMail(mailOptions, function(error, response){

		if (error){
			console.log(error);
		} else {
			console.log("Message sent : " + response.message);
		}
		transport.close();
	});
}