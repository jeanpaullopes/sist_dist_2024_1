var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express retorno' });
});
router.get('/teste', function(req, res, next) {
res.send('teste');

});

module.exports = router;
