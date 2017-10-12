var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res){
	burger.all(function(data) {
		var burgers = {
			burgers: data
		};
		console.log(burgers);
		res.render("index", burgers);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.create([
			"burger_name"
		], [
			req.body.burger_name
		], function (result){
			res.json({id: result.insertId});
		});
});

router.put("/api/burgers/:id", function(req, res){
	burger.update({
		devoured: req.body.devoured
	}, "id", req.params.id, function(result){
		if (result.changedRows == 0){
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;