"user strict";

const mysql = require("mysql");

//local mysql db connection
const dbConn = mysql.createConnection({
	host: "us-cdbr-east-05.cleardb.net",
	user: "b7153bb8833ae0",
	password: "b015ac20",
	database: "heroku_7dbd05eb640091d",
});

dbConn.connect(function (err) {
	if (err) throw err;
	console.log("Database Connected!");
});

module.exports = dbConn;
