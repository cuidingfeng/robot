const db = require('./db').connection;

module.exports.getData = function(){
	return db.then((conn) => {
		return conn.query('SELECT * FROM `sensor`')
	}).
	then((results, fields) => {
		console.log(results); // results contains rows returned by server
		console.log(fields); // fields contains extra meta data about results, if available
		return results;
	});
};