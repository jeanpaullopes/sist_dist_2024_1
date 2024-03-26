var express = require('express');
var router = express.Router();
var services = require('../services/');
/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.headers['api_key'] != 'abc123') {
    res.status(401).send('Acesso negado');
    return;
  }
  res.send(services.users.getAllUsers());
});

router.post('/', function(req, res, next) {
 
  if (req.headers['api_key'] != 'abc123') {
    res.status(401).send('Acesso negado');
    return;
  }
  let obj = req.body;
  if (services.users.getUser(obj.id) != undefined){
    res.status(403).send('Id já existe');
    return;
  }
  obj = repoUsers.addUser(obj);
  res.send(obj);

});

router.get('/:id', function(req, res, next) {
  if (req.headers['api_key'] != 'abc123') {
    res.status(401).send('Acesso negado');
    return;
  }
  let obj = services.users.getUser(parseInt(req.params.id));
  //res.set('Content-Type', 'application/json')
  //res.status(400).send('Bad Request')
  //res.send(obj);
  if (obj == undefined){
    res.status(404).send()
  } else {
    res.send(obj)
  }
});

module.exports = router;
