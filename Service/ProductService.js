var product = require('../Model/Product'); 
//var productPrice = require('../Model/ProductPrice'); 

var ProductModel = product.productModel;
//var PriceModel = productPrice.priceModel;

function findAll(callBack) {
  console.log("Retrieving aaaaall products");

  ProductModel.find({}, callBack);
}

function findById(id, callBack) {
  console.log("Retrieving product by id: " + id);

  var product = ProductModel.findOne({_id: id}, callBack);

  return product;
}

function findByCategory(categoryId, callBack) {
  console.log("Retrieving product by category id: " + categoryId);

  ProductModel.find({categoryId: categoryId}, callBack);
}

function create(json, callBack) {
  console.log("creating product with name: " + json.name);
	
  var product = new ProductModel({name: json.name, 
  									briefDescription: json.briefDescription, 
          							description: json.description, 
          							categoryId: json.categoryId, 
          							price: json.price});
  
  product.save(product, callBack);
}

function update(id, json, callBack) {
  console.log("Updating product with id: " + id);

  ProductModel.findByIdAndUpdate(id, 
  								{ $set: { name: json.name, 
  												briefDescription: json.briefDescription, 
          										description: json.description, 
          										categoryId: json.categoryId, 
          										price: json.price}}, 
          						{ new: true },
          						callBack); 
}

function remove(id, callBack) {
  console.log("Updating product with id: " + id);

  ProductModel.remove( {_id: id}, callBack); 
}

// Load methods
exports.findAll = findAll;
exports.findById = findById;
exports.findByCategory = findByCategory;

// Write methods
exports.create = create;
exports.update = update;

// remove
exports.remove = remove;