var mongoose = require('mongoose'); 
var validator = require('validator');

var validateLocalStrategyEmail = function(email) {
    return (validator.isEmail(email));
};

var userSchema = new mongoose.Schema({  
  name: {
        type: String,
        // unique: true,
        required: [true, 'Name is required'],
        trim: true
    },
  email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        default: '',
        match: /.+\@.+\..+/,
        validate: [validateLocalStrategyEmail,
            'Please fill a valid email address'
        ]
    },	
  password: {
        type: String,
        // unique: true,
        required: [true, 'password is required'],
        trim: true
    },
  admin: {type: Boolean, default: false}
});

var userModel = mongoose.model('Users', userSchema);

exports.userModel = userModel; 