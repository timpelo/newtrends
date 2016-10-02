
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/test";

function fetchFromDb(parameter, callback) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('employees');

    collection.find({"first_name":parameter}).toArray(function(err, docs) {
      callback(docs[0]);
    });
    db.close();
  });
}

exports.fetchFromDb = fetchFromDb;
