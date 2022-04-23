var express = require('express'),
    router = express.Router();

router
  .get('/', function(req, res){
    res.send("Hello Login");
  })

module.exports = router;