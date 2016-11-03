var data = require("../data.json");''

exports.view = function(req, res) {
	// Your code goes here
	console.log(data);
  console.log("yay, view just ran!");
  res.render('view', data); 
  //{"add_purchase": "/add_purchase", "set": "/set", "index": "/index"}  );
}
