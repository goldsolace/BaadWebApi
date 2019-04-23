require('./api/model/db.js');
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var routes = require('./api/routes/trekking');

app.set('port', process.env.PORT || 8080);

app.use(function (req, res, next) {
    console.log(req.method, req.url, Date.now());
    next();
});

app.use('/public', express.static('public'));


app.use('/node_modules',express.static(__dirname +'/node_modules'));

app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

app.use('/', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('App listening on port ' + port);
});
