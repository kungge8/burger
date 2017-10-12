var connection = require('./connections.js');

var tableName = "burgers";

var orm = {
	selectAll: function (tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},

	insertOne: function(table, cols, vals, cb){
		connection.query("INSERT INTO ?? (??) VALUES (?)", [table, cols, vals], function(err, result){
			if (err) throw err;

			cb(result);
		});
	},

	updateOne: function(table, vals, cond, cv, cb){
		connection.query("UPDATE ?? SET ? WHERE ?? = ?", [table, vals, cond, cv], function(err, result){
			if (err) throw err;

			cb(result);
		})

	}
}

module.exports = orm;