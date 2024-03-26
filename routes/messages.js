var express = require('express');
var router = express.Router();
var userServices = require('../services/userServices');
const banco = new Array();

router.get('/', function(req, res, next) {
    let ret = [];
    banco.forEach(element => {
        ret.push(parseMessage(element));
    });
  //res.send(ret);
  res.send(banco);
});
router.post('/', function(req, res, next) {
  let obj = req.body;
  obj.timestamp = new Date();
  banco.push(obj);
  res.send(parseMessageHATEOAS(obj));
}); 


function parseMessageHATEOAS(obj) {
    let ret = {};
    ret.msg = obj.msg;
    ret.timestamp = obj.timestamp;
    ret.de = 'http://localhost:3000/users/' + obj.de;
    ret.userde = userServices.getUser(obj.de);
    ret.para = 'http://localhost:3000/users/' + obj.para;
    return ret;
    

}
module.exports = router;
