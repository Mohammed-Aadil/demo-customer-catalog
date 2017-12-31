var Bill = require('./model');
var Promise = require('bluebird');
var billException = require('./exceptions');
var _ = require('underscore');
var status = require('http-status');


function BillController () { }

/**
 * Function api to get all reports of customer
 * @param {Object} req 
 * @param {Object} res 
 */
BillController.prototype.getReport = function (req, res) {
    var response = {};
    return Bill.find({ customerId: req.params.id }).populate('customerId').exec()
        .then(function (bills) {
            // if bill is not found then
            if(!bills)
                return res.status(status.BAD_REQUEST).json({error: billException.BillNotFound});
            response.totBill = bills.length;
            response.customer = bills[0].customerId;
            response.amount = 0;
            bills.forEach(function (bill) {
                var rate, quantity, discount, tax;
                rate = _.reduce(bill.items, function (r , item) {
                    return r + item.rate;
                }, 0);
                quantity = _.reduce(bill.items, function (q, item) {
                    return q + item.quantity;
                }, 0);

                response.amount += _.reduce(bill.items, function (q, item) {
                    discount = rate * item.quantity * bill.discount / 100;
                    tax = discount * bill.tax / 100;
                    return ((rate * item.quantity) - discount + tax) + q;
                }, 0);
                response.amount = response.amount;
                response.avgAmount = response.amount / response.totBill;
            });
            // rounding the amount to two decimal
            response.amount = Math.round(response.amount * 100) / 100;
            response.avgAmount = Math.round(response.avgAmount * 100) / 100;
            // if there is no error then return 200
            return res.status(status.OK).json(response);
        })
        .catch(function (err) {
            console.error(err);
            return res.status(status.INTERNAL_SERVER_ERROR).json({error: billException.Default});
        });
};

module.exports = BillController;