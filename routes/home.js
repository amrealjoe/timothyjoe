var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/', { title: 'Timothy T. Joe Portfolio' });
});

module.exports = router;
