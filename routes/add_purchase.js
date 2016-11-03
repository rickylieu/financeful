fs = require('fs');
var data = require("../data.json");''
var file = '../data.json'

exports.addPurchase = function(req, res) {
	// Your code goes here
 
  console.log("yay, addPurchase just ran!");
  res.render('add_purchase', data);
  //data.purchases.push({
  console.log(data) 
  //fs.writeFile('data.json',JSON.stringify(data, null, 2), function(err) {
  //	console.error(err)
  //})
  //{ "set": "/set", "view": "/view", "index": "/index"});
}
