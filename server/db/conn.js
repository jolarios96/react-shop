var mysql = require('mysql');
require("dotenv").config({ path: "./.env" });
// require("dotenv").config();

console.log(process.env.HOST);

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});