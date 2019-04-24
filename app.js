require('./api/model/db.js');
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var trekkingRoutes = require('./api/routes/trekking');
var herbloreRoutes = require('./api/routes/herblore');


app.set('port', process.env.PORT || 8080);

app.use(function (req, res, next) {
    console.log(req.method, req.url, Date.now());
    next();
});

app.use(express.static(__dirname + '/public'));

app.use('/node_modules',express.static(__dirname +'/node_modules'));

app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

app.use('/', trekkingRoutes);
app.use('/', herbloreRoutes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('App listening on port ' + port);
});
