var mongoose = require('mongoose'); 

var categorySchema = new mongoose.Schema({  
  name: {
  		type: String, 
  		unique: true,
  		required: [true, 'Name is required'] 
  	},
  description: {	
  		type: String, 
  		required: [true, 'Name is required'] 
  	}
});

var categoryModel = mongoose.model('Category', categorySchema);

exports.categoryModel = categoryModel;