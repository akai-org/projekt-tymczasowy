var express = require('express'),
    router = express.Router();

const db = require('better-sqlite3')('database.db');

router
  .get('/', function(req, res){
  	const rows = db.prepare("SELECT * FROM fundraisers").all();
  	res.json({"success": true, "fundraisers": rows});
  });

 
module.exports = router;