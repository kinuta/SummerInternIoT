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

var service = {};

service.wanamail = wanamail;

module.exports = service;

function wanamail(email){
	var mailOptions = {
		from: 'MonkeyGO <2016monkeygo@gmail.com>',
		to: email,
		subject: 'お客様へのお知らせ(罠センサー) by MonkeyGO',
		text: 'お客様のわなーセンサーが作動しました。より詳しい情報は '+config.address+':'+config.port+'より確認してください。'
	};
	sendmail(mailOptions);
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