var express = require('express');
var router = express.Router();
var service = require('../services/dataService');

router.get('/', function(req, res, next) {
  res.send(service.getCustomers());
});

router.post('/', function(req, res, next) {
  var customer = req.body;
  service.addCustomer(customer);
  res.send('success');
});

router.delete('/:id', function(req, res, next) {
  var customerId = req.params.id;
  service.deleteCustomer(customerId);
  res.send('success');
});

router.get('/:id', function(req, res, next) {
  var customerId = req.params.id;
  var customer = service.getCustomerById(customerId);
  res.send(customer);
});

router.put('/:id', function(req, res, next) {
  var customerId = req.params.id;
  var customer = req.body;
  service.updateCustomer(customer);
  res.send('success');
});
module.exports = router;
