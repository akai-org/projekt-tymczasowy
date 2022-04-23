var express = require('express'),
    router = express.Router();

const db = require('better-sqlite3')('database.db');
const auth = require("../auth");

router
	// TODO: add flag user_activated based on user_id
  .get('/', auth, function(req, res){
  	let userId = 0;
  	if (req.user) {
  		userId = req.user.user_id;
  	}
  	console.log(userId);

  	const rewards = db.prepare(`select rs.*, max(r.redeemed_on) as last_redeemed_on from rewards as rs
left join redeems as r
on r.reward_id = rs.reward_id and r.user_id =?
group by rs.reward_id;`).all(userId);
  	res.json({"success": true, "rewards": rewards});
  });

  //.use('/login', require('./users/login'))
  //.use('/register', require('./users/register'));
 
module.exports = router;