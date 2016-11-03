var data = require("../data.json");''

exports.mood = function(req, res) {
	// Your code goes here
	console.log(data);
  console.log("yay, mood just ran!");
  res.render('mood', data); 
  //{"add_purchase": "/add_purchase", "set": "/set", "index": "/index"}  );
}