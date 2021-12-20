const dotenv = require('dotenv');
var mysql = require('mysql');

dotenv.config();

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });