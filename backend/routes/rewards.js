var express = require('express'),
    router = express.Router();

const db = require('better-sqlite3')('database.db');

router
	// TODO: add flag user_activated based on user_id
  .get('/', function(req, res){
  	const rewards = db.prepare(`select * from rewards`).all();
  	res.json({"success": true, "rewards": rewards});
  });

  //.use('/login', require('./users/login'))
  //.use('/register', require('./users/register'));
 
module.exports = router;