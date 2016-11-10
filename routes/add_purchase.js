
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

exports.addPurchase = function(req, res) {
  //console.log(req.body);
  appendObject(req.body);
}

exports.view = function(req, res) {
  var fs = require('fs');
  data_read = JSON.parse(fs.readFileSync('./data.json'));
  //console.log(data_read);
  res.render('add_purchase', data_read);
}