var express = require("express"),
  router = express.Router();

const db = require('better-sqlite3')('database.db');
const auth = require("../auth");

router
	.get("/", auth, function (req, res) {
	res.send("Hello Users");
	})
	.use("/login", require("./users/login"))
	.use("/register", require("./users/register"))

	.get("/:uid", auth, function (req, res) {
		if (!req.user) return res.sendStatus(403);
		let user = db.prepare(`select uu.*, u.points from v_users as uu inner join users as u on u.user_id = uu.user_id where u.user_id = ?`)
			.all(req.params.uid);
		if (!user.length) {
			res.status(400);
			res.json({"success": false});
		}

	  	user = user[0];

	  	let declarations = db.prepare(`select d.*, p.name as product_name, pp.name as category_name, pp.product_id as category_id, f.name, f.city, f.street, f.postcode, f.finish_date, f.latitude, f.longitude
	from declarations as d
	inner join products as p 
	on p.product_id = d.product_id
	left join products as pp 
	on pp.product_id = p.parent_id
	inner join fundraisers as f
	on f.fundraiser_id = d.fundraiser_id
	where d.user_id = ?
	`)
  		.all(req.params.uid);

  		user.declarations = declarations;

  		let redeems = db.prepare(`select rd.*, rs.name, rs.description, rs.one_per_user
from redeems as rd
inner join rewards as rs
on rs.reward_id = rd.reward_id
where rd.user_id = ?;
		`).all(req.params.uid);

		user.redeems = redeems;

		let subscriptions = db.prepare(`select *
from subscriptions as s
inner join fundraisers as f
on s.fundraiser_id = f.fundraiser_id
where s.user_id = ?;`).all(req.params.uid);

		user.subscriptions = subscriptions;

		let rewards = db.prepare(`select * from rewards`).all();
		

		let history = db.prepare(`select *
from donations as d
inner join fundraisers as f
on f.fundraiser_id = d.fundraiser_id
where d.user_id = ?;`).all(req.params.uid);
		for (let rowN in history) {
			let row = history[rowN];
			let products = db.prepare(`select dp.*, p.name as product_name, pp.name as category_name, pp.product_id as category_id
from donation_products as dp
left join products as p 
on p.product_id = dp.product_id 
left join products as pp
on pp.product_id = p.parent_id
where dp.donation_id = ?;`).all(row.donation_id);
			history[rowN].products = products;
		}

		user.donation_history = history;


		res.json({"success": true, "user": user, "rewards": rewards});
	});

	

module.exports = router;
