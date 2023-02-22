const mysql = require('mysql');

// Environment Variables would be the best way to set these but I don't have
// cloud access or anything so for this demonstration it doesn't matter
const connectionString="mysql://tvt22spo:tvtpass@localhost:3306/library";
const connection = mysql.createPool(connectionString);

module.exports=connection;