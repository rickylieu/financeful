
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var login = require('./routes/login');
var add_purchase = require('./routes/add_purchase');
var view = require('./routes/view');
var set = require('./routes/set');
var mood = require('./routes/mood');
var history = require('./routes/history');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.login);
app.get('/index', index.view);
app.get('/add_purchase', add_purchase.view);
app.get('/view', view.view);
app.get('/view2', view.viewButton);
app.get('/set', set.set);
app.get('/mood', mood.mood);
app.get('/history', history.checkHistory)
app.post('/add_purchase', add_purchase.addPurchase)
app.post('/set', set.addCategory)
app.post('/set/remove', set.removeCategory)



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});