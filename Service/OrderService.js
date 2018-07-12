var order = require('../Model/Order'); 

var productService = require('./ProductService');

var OrderModel = order.orderModel;

function findAll(callBack) {
  console.log("Retrieving all orders");

  OrderModel.find({}, callBack);
}

function findById(id, callBack) {
  console.log("Retrieving order by id: " + id);

  OrderModel.findOne({_id: id}, callBack);
}

function create(json, callBack) {
  console.log("creating order with name id: " + json.userId);

  console.log(json.products.length);

  var order = new OrderModel({userId: json.userId});
  
  for (var i = json.products.length - 1; i >= 0; i--) {

    productService.findById(json.products[i].productId, 
      function (err, product)  {
        console.log('producto de la base %s', product);

        console.log('order de la base %1', this.order);

        this.order.products[i] = product;

      });
  }

  order.save(order, callBack);
}

function update(id, json, callBack) {
  console.log("Updating order with id: " + id);

  OrderModel.findByIdAndUpdate(id, 
  								{ $set: { name: json.name, description: json.description }},
          						{ new: true },
          						callBack); 
}

function remove(id, callBack) {
  console.log("removing order with id: " + id);

  OrderModel.remove( {_id: id}, callBack); 
}

// Read Method
exports.findAll = findAll;
exports.findById = findById;

// Write Method
exports.create = create;
exports.update = update;

exports.remove = remove;