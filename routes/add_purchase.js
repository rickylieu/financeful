var data = require("../data.json");''

exports.addPurchase = function(req, res) {
	// Your code goes here
  console.log("yay, addPurchase just ran!");
  res.render('add_purchase', { "set": "/set", "view": "/view", "index": "/index"});
}
