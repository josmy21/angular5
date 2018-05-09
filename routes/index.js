var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
//   res.render('../src/index.html');
   res.render('index.html');
});

module.exports = router;