var mongoose = require('mongoose'); 

var productOrderSchema = new mongoose.Schema({  
  _id: String, 
  name: String,
  briefDescription: String,
  amout: Number,
  price: Number 
});

var orderSchema = new mongoose.Schema({  
  userId: {
  		type: String, 
  		unique: true, 
  		trim: true,
  		required: [true, 'user is required'],
  	}, 
  products: [productOrderSchema]
  
  // prices: [ PriceModel.priceSchema] 
});

var orderModel = mongoose.model('order', orderSchema);

exports.orderModel = orderModel; 