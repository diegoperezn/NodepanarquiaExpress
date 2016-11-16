var productService = require("../Service/ProductService");

var express = require('express');

var app = express();

app.get('/', function(req, res){
	
	productService.findAll(function (err, list) {
		if (err) {
			res.send(err); 
		} else{
			res.send(list); 
		}				
	});
});

app.get('/:id', function(req, res){
	var id = req.params.id;

	productService.findById(id, function (err, result) {
		if (err) {
			res.send(err); 
		} else {
			res.send(result); 
		}				
	});
});

app.delete('/:id', function(req, res){
	var id = req.params.id;

	productService.remove(id, function (err) {
		if (err) {
			res.send(err); 
		} else{
			res.send("Removed :)"); 
		}				
	});
});

app.post('/:id/update', function(req, res){
	var id = req.params.id;

	productService.update(id, req.body, function (err, result) {
		if (err) {
			res.send(err); 
		} else{
			res.send(result); 
		}				
	});
});

app.put('/create', function(req, res){
	
	productService.create(req.body, function (err, result) {
		if (err) {
			res.send(err); 
		} else{
			res.send(result); 
		}				
	});
});

exports.app = app