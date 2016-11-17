var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
  console.log(data);
  data['button'] = false;
  res.render('view', data); 
  //{"add_purchase": "/add_purchase", "set": "/set", "index": "/index"}  );
}


exports.viewButton = function(req, res) {
	// Your code goes here
  console.log(data);
  data['button'] = true;
  res.render('view', data); 
  //{"add_purchase": "/add_purchase", "set": "/set", "index": "/index"}  );
}
