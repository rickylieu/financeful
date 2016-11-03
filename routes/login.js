// Get all of our friend data
var data = require('../data.json');

exports.login = function(req, res){
	console.log("yay login");
	res.render('login', { "index": "/index" } );
};