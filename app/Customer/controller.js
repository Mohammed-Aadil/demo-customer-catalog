var Customer = require('./model');
var customerException = require('./exceptions');
var status = require('http-status');
var Promise = require('bluebird');

function CustomerController () { }

/**
* Method to list all the customer
* @param {Object} req 
* @param {Object} res 
*/
CustomerController.prototype.list = function (req, res){
    var query = Customer.find(req.query || {});
    var fieldStr = '';
    if (req.query.fields) {
        if (typeof req.query.fields === 'string')
            query.select(req.query.fields);
        else
            query.select(req.query.fields.join(' '));
    }
   // find all user
    return query.exec()
        .then(function (users) {
            //return all user
            console.log(users);
            return res.json(users);
        })
        .catch(function(err){
            // if error occur return with 400
            console.error(err);
            return res.status(status.INTERNAL_SERVER_ERROR).json({error: customerException.Default});
        });
};

/**
 * api to create customer
 * @param {Object} req 
 * @param {Object} res 
 */
CustomerController.prototype.create = function(req, res){
    // creating customer obj
    return Promise.resolve(new Customer(req.body).save())
        .then(function (customer) {
            console.log("Customer is saved successfully");
            res.json(customer);
        })
        .catch(function(err){
            console.error(err);
            return res.status(status.INTERNAL_SERVER_ERROR).json({error: customerException.Default});
        });
};
/**
 * api to delete single customer
 * @param {Object} req 
 * @param {Objetc} res 
 */
CustomerController.prototype.delete = function(req, res){
    // find customer then delete it
    return Promise.resolve(Customer.findOneAndRemove({
        _id: req.params.id
        // callback funtion for customer lookup
    }))
        .then(function (customer) {
            // if not customer found then
            if(!customer)
                return res.status(status.BAD_REQUEST).json({error: customerException.CustomerNotFound});
            // removing customer from the documents
            return res.status(status.OK).json(customer);
        })
        .catch(function (err) {
            console.error(err);
            return res.status(status.INTERNAL_SERVER_ERROR).json({error: customerException.Default});
        });
};

/**
 * api to update single customer
 * @param {Object} req 
 * @param {Object} res 
 */
CustomerController.prototype.update = function(req, res){
    // find customer by id update all fields in req body return
    return Promise.resolve(Customer.findOneAndUpdate({ _id: req.params.id }, req.body, { }))
        .then(function (customer) {
            // if customer is not found then
            if(!customer)
                return res.status(status.BAD_REQUEST).json({error: customerException.CustomerNotFound});
            // if there is no error then return 200
            return res.status(status.OK).json(customer);
        })
        .catch(function (err) {
            console.error(err);
            return res.status(status.INTERNAL_SERVER_ERROR).json({error: customerException.Default});
        });
};

/**
 * api to filter customers
 * @param {Object} req 
 * @param {Object} res 
 */
CustomerController.prototype.filter = function(req, res){
    // find customer from filter
    var filters = {$or: []};
    // building filter obj
    for (var key in req.query) {
        if (req.query.hasOwnProperty(key)) {
            filters.$or.push({
                key: req.query[key]
            });
        }
    }
    if (!filters.$or || filters.$or.length == 0)
        filters = {};
    // filtering customer based on various filter
    return Promise.resolve(Customer.find(filters))
        .then(function (customers) {
            // else return all customer, empty list inclusive
            res.json(customers);
        })
        .catch(function (err) {
            console.error(err);
            return res.status(status.INTERNAL_SERVER_ERROR).json({error: customerException.Default});
        })
};

module.exports = CustomerController;
