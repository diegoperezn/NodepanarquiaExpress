var user = require('../Model/User'); 

var UserModel = user.userModel;

function findAll(callBack) {
  console.log("Retrieving all users");

  UserModel.find({}, callBack);
}

function findById(id, callBack) {
  console.log("Retrieving user by id: " + id);

  UserModel.findOne({_id: id}, callBack);
}

function create(json, callBack) {
  console.log("creating user with name id: " + json.name);

  var user = new UserModel({name: json.name, 
                            password: json.password, 
                            email: json.email});
  
  user.save(user, callBack);
}

function update(id, json, callBack) {
  console.log("Updating user with id: " + id);

  UserModel.findByIdAndUpdate(id, 
  								{ $set: { name: json.name, description: json.description }},
          						{ new: true },
          						callBack); 
}

function remove(id, callBack) {
  console.log("removing user with id: " + id);

  UserModel.remove( {_id: id}, callBack); 
}

// Read Method
exports.findAll = findAll;
exports.findById = findById;

// Write Method
exports.create = create;
exports.update = update;

exports.remove = remove;