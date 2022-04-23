var express = require('express'),
    router = express.Router();

const db = require('better-sqlite3')('database.db');
const auth = require("../auth");

router
  .get('/', auth, function(req, res){
  	// TODO: get user id => flag if user subscribed  

  	// Better use eye drops before reading this code :)
  	const fundraisers = db.prepare(`select f.*, 
sum(r.current_quantity) as current_quantity, sum(r.required_quantity) as required_quantity
from fundraisers as f 
left join requirements as r
on r.fundraiser_id = f.fundraiser_id
group by f.fundraiser_id`).all();
  	let ids = [];
  	for (let rowId in fundraisers) {
  		let row = fundraisers[rowId];
  		const requirements = db.prepare(`select r.*, p.name as product_name, pp.name as category_name, pp.product_id as category_id
from requirements as r
inner join products as p
on p.product_id = r.product_id
left join products as pp 
on pp.product_id = p.parent_id
where r.fundraiser_id = ?`).all(row.fundraiser_id);

  		let categories = {};
  		for (let req of requirements) {
  			if (!(req.category_id in categories)) {
  				categories[req.category_id] = {
  					category_name: req.category_name,
  					priority: req.priority,
  					category_id: req.category_id,
  					required_quantity: 0,
  					current_quantity: 0
  				};
  			}
  			categories[req.category_id].priority = Math.max(
  				categories[req.category_id].priority,
  				req.priority
  			);

  			categories[req.category_id].current_quantity += req.current_quantity;
  			categories[req.category_id].required_quantity += req.required_quantity;
  		}

  		let categoriesList = [];
  		for (let key in categories) {
  			categoriesList.push(categories[key]);
  		}

  		row.requirements = requirements;
  		row.categories = categoriesList;
  		fundraisers[rowId] = row;

  	}

  	res.json({"success": true, "fundraisers": fundraisers});
  });

 
module.exports = router;