var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
