var userService = require("../Service/UserService");

var express = require('express');

var app = express();

app.get('/', function(req, res){
	
	userService.findAll(function (err, list) {
		if (err) {
			res.statusCode = 500;
			res.send(err); 
		} else{
			res.send(list); 
		}				
	});
});

app.get('/:id', function(req, res){
	var id = req.params.id;

	userService.findById(id, function (err, result) {
		if (err) {
			res.statusCode = 500;
			res.send(err); 
		} else if (result != null) {
			res.send(result); 
		} else {
			res.sendStatus(404);
		}				
	});
});

app.delete('/:id', function(req, res){
	var id = req.params.id;

	userService.remove(id, function (err) {
		if (err) {
			res.statusCode = 500;
			res.send(err); 
		} else{
			res.send(); 
		}				
	});
});

app.post('/:id/update', function(req, res){
	var id = req.params.id;

	userService.update(id, req.body, function (err, result) {
		if (err) {
			res.statusCode = 500;
			res.send(err); 
		} else {
			res.send(result); 
		}				
	});
});

app.put('/create', function(req, res){
	
	userService.create(req.body, function (err, result) {
		if (err) {
			res.statusCode = 500;
			res.send(err); 
		} else{
			res.send(result); 
		}				
	});
});

exports.app = app