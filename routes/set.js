
exports.set = function(req, res) {
	// Your code goes here
  var fs = require('fs');
  console.log("yay, set");
  var data_read = JSON.parse(fs.readFileSync('./data.json'));
  //console.log(data_read);
  res.render('set', data_read);
  //{"add_purchase": "/add_purchase", "view": "/view", "index": "/index"} );
}

function appendObject(r){
  var fs = require('fs');
  var configFile = fs.readFileSync('./data.json');
  var configFile2 = fs.readFileSync('public/data.json');
  var config = JSON.parse(configFile);
  var config2 = JSON.parse(configFile2);
  config.categories.push(r);
  config2.categories.push(r);
  var configJSON = JSON.stringify(config);
  var configJSON2 = JSON.stringify(config2);
  fs.writeFileSync('./data.json', configJSON);
  fs.writeFileSync('public/data.json', configJSON2); 
}

exports.addCategory = function(req, res) {
  console.log("adding")
  appendObject(req.body);
}

exports.removeCategory = function(req, res) {
  deleteObject(req.body.category);
}

function deleteObject(r){
  var fs = require('fs');
  var configFile = fs.readFileSync('./data.json');
  var configFile2 = fs.readFileSync('public/data.json');
  var config = JSON.parse(configFile);
  var config2 = JSON.parse(configFile2);
  for (i = 0; i < config.categories.length; i++) {
    if (config.categories[i].category == r) {
      config.categories.splice(i,1);
      config2.categories.splice(i,1);
    }
  var configJSON = JSON.stringify(config);
  var configJSON2 = JSON.stringify(config2);
  fs.writeFileSync('./data.json', configJSON);
  fs.writeFileSync('public/data.json', configJSON2);
  }
}