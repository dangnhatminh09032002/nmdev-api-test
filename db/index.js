const Pool = require("pg").Pool;
require("dotenv").config();

let DB_USER = process.env.USER;
let DB_HOST = process.env.HOST || "localhost";
let DB_DATABASE = process.env.DATABASE;
let DB_PASSWORD = process.env.PASSWORD;
let DB_PORT = process.env.PORT || 2002;

// console.log(USER, PASSWORD, DATABASE, HOST);

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

module.exports = pool;
