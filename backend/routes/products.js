var express = require('express'),
    router = express.Router();

const db = require('better-sqlite3')('database.db');
const auth = require("../auth");

router
  .get('/', auth, function(req, res){
  	if (!req.user) return res.sendStatus(403);
  	
  	const products = db.prepare(`select * from products`).all();
  	let categories = {};

  	for (let product of products) {
  		if (product.parent_id == null) {
  			categories[product.product_id] = {
  				category_id: product.product_id,
  				name: product.name,
  				products: []
  			}
  		}
  	}

  	for (let product of products) {
  		if (product.parent_id != null) {
  			categories[product.parent_id].products.push({
  				product_id: product.product_id,
  				name: product.name,
  				carbon_footprint: product.carbon_footprint
  			});
  		}
  	}

  	let productsTree = [];
  	for (let categoryId in categories) {
  		productsTree.push(categories[categoryId]);
  	}

  	res.json({"success": true, "products": productsTree});
  });

 
module.exports = router;