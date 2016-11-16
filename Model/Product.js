var mongoose = require('mongoose'); 

var productSchema = new mongoose.Schema({  
  name: {
  		type: String, 
  		unique: true, 
  		trim: true,
  		required: [true, 'Name is required'],
  	},
  briefDescription: {
  		type: String, 
  		trim: true,
  		required: [true, 'briefDescription is required']
  	},
  description: {
  		type: String, 
  		trim: true,
  		required: [true, 'Description is required']
  	},
  categoryId: {
  		type: String, 
  		trim: true,
  		required: [true, 'category is required']
  	},
  //urlPhoto: String,
  price: {
  		type: Number, 
  		required: [true, 'price is required']
  	}
  // prices: [ PriceModel.priceSchema] 
});

var productModel = mongoose.model('Product', productSchema);

exports.productModel = productModel; 