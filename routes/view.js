var data = require("../data.json");''

exports.view = function(req, res) {
	// Your code goes here
	console.log(data);
  console.log("yay, view just ran!");
  res.render('view', {  "index": "/index" } );
}
