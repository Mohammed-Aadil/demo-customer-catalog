var mongoose = require('mongoose');
var Validator = require('./../../utility/validator');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');
var paginate = require('mongoose-paginate');
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
        validate: validator.phoneValidator,
        required: true
    },
    phoneNumber: {
        type: String
    },
    addresses: {
        type: [
            {}
        ],
        required: true
    },
    dob: {
        type: Schema.Types.Date,
        required: true
    }
});

customerSchema.plugin(timestamp);
customerSchema.plugin(paginate);

module.exports = mongoose.model('Customer', customerSchema);
