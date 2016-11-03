// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);

	res.render('index', data); 
		//{ "add_purchase": "/add_purchase", "view": "/view", "set": "/set"});
};