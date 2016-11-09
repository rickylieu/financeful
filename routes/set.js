
exports.set = function(req, res) {
	// Your code goes here
  var fs = require('fs');
  console.log("yay, set");
  data_read = JSON.parse(fs.readFileSync('./data.json'));
  //console.log(data_read);
  res.render('set', data_read);
  //{"add_purchase": "/add_purchase", "view": "/view", "index": "/index"} );
}

function appendObject(r){
  var fs = require('fs');
  var configFile = fs.readFileSync('./data.json');
  var config = JSON.parse(configFile);
  console.log("\n---\n");
  console.log(r);
  console.log("\n---\n");
  config.purchases.push(r);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('./data.json', configJSON);
}

exports.addCategory = function(req, res) {
  console.log(req.body);
  appendObject(req.body);
}
