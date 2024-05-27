var express = require('express');
var router = express.Router();

app.ws('/', function(ws, req) {
    console.log('socket', req.testing); 
});