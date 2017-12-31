var express = require('express');
var router = express.Router();
var BillController = require('./controller');
var controller = new BillController();

// api to list customer's billing
router.route('/customer/:id').get(controller.getReport);

module.exports = router;