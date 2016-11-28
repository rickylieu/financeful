//var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
  //console.log(data);
  //data['button'] = false;
  var fs = require('fs');
  var data_read = JSON.parse(fs.readFileSync('./data.json'));
  data_read['button'] = true;
  //console.log(data_read);
  res.render('view', data_read);
 // res.render('view', data); 
  //{"add_purchase": "/add_purchase", "set": "/set", "index": "/index"}  );
}



