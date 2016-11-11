
function appendObject(r){
  var fs = require('fs');
  var configFile = fs.readFileSync('./data.json');
  var configFile2 = fs.readFileSync('public/data.json');
  var config = JSON.parse(configFile);
  var config2 = JSON.parse(configFile2);
  config.purchases.push(r);
  config2.purchases.push(r);
  var configJSON = JSON.stringify(config, null, 4);
  var configJSON2 = JSON.stringify(config2, null, 4);
  fs.writeFileSync('./data.json', configJSON);
  fs.writeFileSync('public/data.json', configJSON2);
}

exports.addPurchase = function(req, res) {
  appendObject(req.body);
}

exports.view = function(req, res) {
  var fs = require('fs');
  var data_read = JSON.parse(fs.readFileSync('./data.json'));
  //console.log(data_read);
  res.render('add_purchase', data_read);
}