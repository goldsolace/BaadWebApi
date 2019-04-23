//Driver required into file
var MongoClient = require('mongodb').MongoClient;
//Connection url : protocol /serve/port/db
const dbName = 'baad';
var dburl = process.env.MONGODB_URI || 'mongodb://localhost:27017/baad';
var _connection = null;

var open  = function () {
    //set connection
    MongoClient.connect(dburl , function(err, client) {
        if (err) {
            console.log("DB connection failed ");
            return;
        }
        _connection = client.db(dbName);
        console.log("DB connection open ");    
    });
};

var get = function () {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};