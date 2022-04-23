var express = require('express'),
    router = express.Router();

router
  .get('/', function(req, res){
  	res.send("Hello Rewards");
  })

  //.use('/login', require('./users/login'))
  //.use('/register', require('./users/register'));
 
module.exports = router;