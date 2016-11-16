var category = require('../Model/Category'); 

var CategoryModel = category.categoryModel;

function findAll(callBack) {
  console.log("Retrieving all categorys");

  CategoryModel.find({}, callBack);
}

function findById(id, callBack) {
  console.log("Retrieving category by id: " + id);

  CategoryModel.findOne({_id: id}, callBack);
}

function create(json, callBack) {
  console.log("creating category with name id: " + json.name);

  var category = new CategoryModel({name: json.name, description: json.description});
  
  category.save(category, callBack);
}

function update(id, json, callBack) {
  console.log("Updating category with id: " + id);

  CategoryModel.findByIdAndUpdate(id, 
  								{ $set: { name: json.name, description: json.description }},
          						{ new: true },
          						callBack); 
}

function remove(id, callBack) {
  console.log("removing category with id: " + id);

  CategoryModel.remove( {_id: id}, callBack); 
}

// Read Method
exports.findAll = findAll;
exports.findById = findById;

// Write Method
exports.create = create;
exports.update = update;

exports.remove = remove;