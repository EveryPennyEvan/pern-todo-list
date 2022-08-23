const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
});

module.exports = pool;