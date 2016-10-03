
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/test";

function fetchFromDb(parameter, callback) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('employees');
    collection.find({"id":Number(parameter)}).toArray(function(err, docs) {
      callback(docs);
    });
  });
}

function fetchAllFromDb(callback) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('employees');
    collection.find({}).toArray(function(err, docs) {
      console.log(err);
      callback(docs);
    });
  });
}

exports.fetchFromDb = fetchFromDb;
exports.fetchAllFromDb = fetchAllFromDb;
