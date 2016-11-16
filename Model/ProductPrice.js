var mongoose = require('mongoose'); 

var priceSchema = new mongoose.Schema({ 
  from: {type: Date, default: Date.now},	
  to: Date,
  price: Number
});

var priceModel = mongoose.model('Prices', priceSchema);

exports.priceSchema = priceSchema;
exports.priceModel = priceModel;