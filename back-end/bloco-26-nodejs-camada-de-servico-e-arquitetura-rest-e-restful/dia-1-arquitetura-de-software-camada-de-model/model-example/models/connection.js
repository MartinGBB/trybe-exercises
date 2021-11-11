const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'martinb',
  password: 'martin97',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
