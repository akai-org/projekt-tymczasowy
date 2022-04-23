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
  })
  .post('/:id/redeem', auth, function(req, res){
    if (!req.user) return res.sendStatus(403);

    const reward = db.prepare(`select * from rewards where reward_id = ?`).all(req.params.id);
    if (!reward.length) return res.sendStatus(400);

    const test = db.prepare(`select points >= ? as can_redeem from users
where user_id = ?`).all(reward[0].points_cost, req.user.user_id);

    if (test[0].can_redeem == 0) return res.sendStatus(418);

    // race condition

    db.prepare(`insert into redeems (user_id, reward_id, points_used)
    	values (?, ?, ?);`).run(req.user.user_id, req.params.id, reward[0].points_cost);

    db.prepare(`update users set points = max(0, points - ?) where user_id = ?;`)
    	.run(reward[0].points_cost, req.user.user_id);

    res.json({"success": true});
  });

module.exports = router;