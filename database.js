const mysql = require('mysql');

const connection = mysql.createPool(process.env.mysqlString);

module.exports=connection;