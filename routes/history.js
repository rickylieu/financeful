// Get all of our data
exports.checkHistory = function(req, res){
	console.log("HELLLOOO");
	var fs = require('fs'); 
	data = JSON.parse(fs.readFileSync('./data.json'));
	res.render('history', data );
};