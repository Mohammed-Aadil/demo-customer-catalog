var customerRoute = require('./../app/Customer/route');
var billRoute = require('./../app/Bill/route');

var Routes = [
  { path: '/Customer', route: customerRoute },
  { path: '/Bill', route: billRoute }
];

module.exports = Routes;
