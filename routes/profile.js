var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile/index', { title: 'About Timothy T. Joe, Software Developer' });
});

module.exports = router;
