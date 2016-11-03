var data = require("../data.json");''

exports.set = function(req, res) {
	// Your code goes here
  console.log("yay, set");
  res.render('set', data);
  //{"add_purchase": "/add_purchase", "view": "/view", "index": "/index"} );
}
