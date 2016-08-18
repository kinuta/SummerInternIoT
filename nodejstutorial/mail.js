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

var mailOptions = {
	from: 'MonkeyGO <2016monkeygo@gmail.com>',
	to: '2016minamiintern@gmail.com',
	subject: 'Nodemailer 테스트',
	text: '평문 보내기 테스트 '
};

transport.sendMail(mailOptions, function(error, response){

	if (error){
		console.log(error);
	} else {
		console.log("Message sent : " + response.message);
	}
	transport.close();
});

// var nodemailer = require('nodemailer');

// var smtpTransport = nodemailer.createTransport("SMTP", {
// 	service: 'Gmail',
// 	auth: {
// 		user: '2016monkeygo',
// 		pass: 'minami2016'
// 	}
// });

// var mailOptions = {
// 	from: 'MonkeyGO <2016monkeygo@gmail.com>',
// 	to: '2016minamiintern@gmail.com',
// 	subject: 'Nodemailer 테스트',
// 	text: '평문 보내기 테스트 '
// };

// smtpTransport.sendMail(mailOptions, function(error, response){

// 	if (error){
// 		console.log(error);
// 	} else {
// 		console.log("Message sent : " + response.message);
// 	}
// 	smtpTransport.close();
// });