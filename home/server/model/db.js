// get the client
const mysql = require('mysql2/promise');

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');
// create the connection, specify bluebird as Promise
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 database: 'ifttt',
 Promise: bluebird
});

module.exports.connection = connection;

/*
//https://www.npmjs.com/package/mysql2


// query database
const [rows, fields] =  connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);


// simple query
connection.query(
 'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
 function(err, results, fields) {
   console.log(results); // results contains rows returned by server
   console.log(fields); // fields contains extra meta data about results, if available
 }
);

// with placeholder
connection.query(
 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
 ['Page', 45],
 function(err, results) {
   console.log(results);
 }
);
*/
