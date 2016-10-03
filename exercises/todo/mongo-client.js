(function() {
  "use strict";

  var MongoClient = require('mongodb').MongoClient
  var url = "mongodb://localhost:27017/test";

  /* List functions */
  function getLists(callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.find({}).toArray(function(err, docs) {
        console.log(err);
        callback(docs);
      });
    });
  }

  function addList(todolist, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.insertOne(todolist, function(err, result) {
        if(err == null) {
          callback({"success":"true"});
        } else {
          callback({"success":"false"});
        }
      });
    });
  }

  function getListById(listId, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.find({"id":Number(listId)}).toArray(function(err, docs) {
        console.log(err);
        callback(docs);
      });
    });
  }

  /* Item functions */
  function addItem(item, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todoitem');
      collection.insertOne(item, function(err, result) {
        if(err == null) {
          callback({"success":"true"});
        } else {
          callback({"success":"false"});
        }
      });
    });
  }

  function getItemsByList(listId, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todoitem');
      collection.find({"todolist":Number(listId)}).toArray(function(err, docs) {
        callback(docs);
      });
    });
  }

  /* Utils */
  function getLastId(collectionName, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection(collectionName);
      collection.find({}).sort({"id":-1}).limit(1).toArray(function(err, docs) {
        if(docs.length > 0) {
          callback(docs[0].id);
        } else {
          callback(0);
        }
      });
    });
  }

  exports.getLists = getLists;
  exports.getListById = getListById;
  exports.addList = addList;
  exports.getLastId = getLastId;
  exports.getItemsByList = getItemsByList;
  exports.addItem = addItem;
}())
