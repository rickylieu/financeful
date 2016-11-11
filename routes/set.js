
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
  //console.log(configFile)
  var config = JSON.parse(configFile);
  config.categories.push(r);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('./data.json', configJSON);
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
  var config = JSON.parse(configFile);
  console.log(config.categories.length);
  for (i = 0; i < config.categories.length; i++) {
    if (config.categories[i].category == r) {
      console.log(config.categories.splice(i,1));
      console.log("removing");
    }
      var configJSON = JSON.stringify(config);
  fs.writeFileSync('./data.json', configJSON);
  }
  // delete config.categories[r]
  // var configJSON = JSON.stringify(config);
  // fs.writeFileSync('./data.json', configJSON);

}