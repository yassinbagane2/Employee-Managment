const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  database: "employee_managment",
  password: process.env.DB_PWD,
});

module.exports = db;
