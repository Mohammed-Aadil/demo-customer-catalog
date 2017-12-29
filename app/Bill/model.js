var mongoose = require('mongoose');
var Validator = require('./../../utility/validator');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');
var validator = new Validator();
var mongooseAutoIncrement = require('mongoose-auto-increment');

var billSchema = new Schema({
    billNumber: {
        type: Number
    },
    billDate: {
        type: Date,
        required: true
    },
    items: {
        type: [{
            name: String,
            quantity: Number,
            rate: Number
        }]
    },
    discount: {
        type: Number,
        default: 0,
        required: true
    },
    tax: {
        type: Number,
        default: 0,
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    }
});

billSchema.plugin(timestamp);
billSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Bill', field: 'billNumber', startAt: 1, incrementBy: 1 });

module.exports = mongoose.model('Bill', billSchema);