// Get all of our data
var data = require('../data.json');

exports.checkHistory = function(req, res){
	res.render('history', data );
};