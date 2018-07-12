var express = require('express');

var productController = require("./Controller/ProductController");
var categoryController = require("./Controller/CategoryController");
var userController = require("./Controller/UserController");
var orderController = require("./Controller/OrderController");

var app = express(); 
var bodyParser = require('body-parser');

function iniciar(route) {
	app.use(bodyParser.json());

	//app.use('/products', productController.app);
	app.use('/category', categoryController.app);
	app.use('/user', userController.app);
	app.use('/order', orderController.app);

	app.listen(8080);

	console.log("servidor iniciado");
}

exports.iniciar = iniciar;


