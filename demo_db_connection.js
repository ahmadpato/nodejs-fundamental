var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "sysdb",
	password : "4ktnbOU2hDLmHsaZ"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
});