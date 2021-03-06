const express = require("express");
const app = express();
const cors = require("cors");

// Grabs dotenv file for local server
// require("dotenv").config({ path: "./config.env" });
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));

// get driver connection 
var mysql = require('mysql');


// development login for local DB -- Port to Heroku via JawsDB later
// get local connection details from .env file
var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password
});

app.listen(port, () => {
  // perform a database connection when server starts
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
});