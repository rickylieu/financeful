// Get all of our data
var data = require('../data.json');

exports.login = function(req, res){
	console.log("yay login");
	res.render('login', data );
};

exports.checklog = function(req, res) {
  console.log(req.body);
  appendObject(req.body);
}