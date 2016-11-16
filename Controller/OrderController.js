var orderService = require("../Service/OrderService");

var express = require('express');

var app = express();

app.get('/', function(req, res){
	
	orderService.findAll(function (err, list) {
		if (err) {
			res.send(err); 
		} else{
			res.send(list); 
		}				
	});
});

app.get('/:id', function(req, res){
	var id = req.params.id;

	orderService.findById(id, function (err, result) {
		if (err) {
			res.send(err); 
		} else {
			res.send(result); 
		}				
	});
});

app.delete('/:id', function(req, res){
	var id = req.params.id;

	orderService.remove(id, function (err) {
		if (err) {
			res.send(err); 
		} else{
			res.send("Removed :)"); 
		}				
	});
});

app.post('/:id/update', function(req, res){
	var id = req.params.id;

	orderService.update(id, req.body, function (err, result) {
		if (err) {
			res.send(err); 
		} else{
			res.send(result); 
		}				
	});
});

app.put('/create', function(req, res){
	
	orderService.create(req.body, function (err, result) {
		if (err) {
			
			res.send(err); 
		} else{
			res.send(result); 
		}				
	});
});

exports.app = app