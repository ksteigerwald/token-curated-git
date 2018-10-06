var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("Ok");
});

router.get('/ping', function(req, res, next) {
  res.status(200).send("Ok");
});
module.exports = router;
