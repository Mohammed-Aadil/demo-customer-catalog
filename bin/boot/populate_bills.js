var Customer = require('./../../app/Customer/model');
var Bill = require('./../../app/Bill/model');
var functions = require('./../../utility/functions');
var moment = require('moment');
var Promise = require('bluebird');

module.exports = function (app) {
    Promise.resolve(Customer.find({}))
        .then(function(customers) {
            if (customers.length) {
                for (var i = 0; i < 1000; i++) {
                    var items = [];
                    for(var j = 0; j < functions.randomInt(1, 10); j++)
                        items.push({
                            name: functions.randomString(10),
                            quantity: functions.randomInt(1, 100),
                            rate: functions.randomInt(1, 15)
                        })
                    new Bill({
                        billDate: moment(),
                        items: items,
                        discount: functions.randomInt(0, 50),
                        tax: functions.randomInt(5, 28),
                        customerId: customers[functions.randomInt(0, customers.length - 1)]._id
                    }).save();
                }
            }            
        });    
};