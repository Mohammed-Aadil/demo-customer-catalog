var express = require('express');
var CustomerController = require('./controller');
var router = express.Router();
var controller = new CustomerController();

// api call to list all customer
router.route('^/list$').get(controller.list);
// api controller to get list of customer from various filters
router.route('^/filter').get(controller.filter);
// api to create customer
router.route('^/create$').post(controller.create);
// api to update customer
router.route('^/update$').put(controller.update);
// api to delete customer
router.route('^/delete$').delete(controller.delete);

module.exports = router;