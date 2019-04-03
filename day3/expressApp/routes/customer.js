var express = require('express');
var router = express.Router();
var service = require('../services/dataService');

router.get('/', function(req, res, next) {
  res.render('customers', { title: 'Customers', data:service.getCustomers()});
});

module.exports = router;
