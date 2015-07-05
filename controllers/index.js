var express = require('express');
var mongoose = require('mongoose');
var index = require('../models/index');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
