var express = require('express');
var router = express.Router();
var services = require('../services/index');
router.get('/', async function(req, res, next) {
    //if (req.headers['api_key'] != 'abc123') {
    //  res.status(401).send('Acesso negado');
    //  return;
    //}
    let ret = await services.users.teste();
    res.send(ret);
  });


  module.exports = router;