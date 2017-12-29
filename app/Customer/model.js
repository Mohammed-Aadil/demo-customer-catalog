var mongoose = require('mongoose');
var Validator = require('./../../utility/validator');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');
var validator = new Validator();

var customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: validator.emailValidator
    },
    mobileNumber: {
        type: String,
        validate: validator.phoneValidator
    },
    phoneNumber: {
        type: String,
        validate: validator.phoneValidator
    },
    addresses: {
        type: [
            Object
        ],
    },
    DOB: {
        type: Date,
        required: true
    }
});

customerSchema.plugin(timestamp);

module.exports = mongoose.model('Customer', customerSchema);