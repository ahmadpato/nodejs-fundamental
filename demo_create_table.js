var mysql = require('mysql');

var con =  mysql.createConnection({
	host: "localhost",
	user: "sysdb",
	password: "4ktnbOU2hDLmHsaZ",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
	var sql = "CREATE TABLE customers (name VARCHAR(225), address VARCHAR(255))";
	con.query(sql, function (err, result){
		if(err) throw err;
		console.log("Table created");
	});
});