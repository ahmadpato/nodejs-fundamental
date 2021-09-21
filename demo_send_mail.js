var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'mhidayaturachman@gmail.com',
		pass: 'ytxjdfoeictddeht'
	}
});

var mailOptions = {
	from: 'mhidayaturachman@gmail.com',
	to: 'ahmadpato93@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'	
};

transporter.sendMail(mailOptions, function(error, info){
	if (error){
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});