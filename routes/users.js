var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(express.static("./public"))
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
