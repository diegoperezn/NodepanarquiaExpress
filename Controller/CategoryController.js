var categoryService = require("../Service/CategoryService");
var ProductService = require("../Service/ProductService");

var express = require('express');

var app = express();

app.get('/test', function (req, res) {
	res.send("Success");
});

app.get('/', function (req, res) {

	categoryService.findAll(function (err, list) {
		if (err) {
			res.send(err);
		} else {
			res.send(list);
		}
	});
});

app.get('/:id', function (req, res) {
	var id = req.params.id;

	categoryService.findById(id, function (err, list) {
		if (err) {
			res.send(err);
		} else {
			res.send(list);
		}
	});
});

app.delete('/:id', function (req, res) {
	var id = req.params.id;

	categoryService.remove(id, function (err) {
		if (err) {
			res.send(err);
		} else {
			res.send("Removed :)");
		}
	});
});

app.post('/:id/update', function (req, res) {
	var id = req.params.id;

	categoryService.update(id, req.body, function (err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

app.get('/:id/products', function (req, res) {
	var categoryId = req.params.id;

	ProductService.findByCategory(categoryId, function (err, list) {
		if (err) {
			res.send(err);
		} else {
			res.send(list);
		}
	});
});

app.put('/create', function (req, res) {

	categoryService.create(req.body, function (err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});



exports.app = app