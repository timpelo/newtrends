(function() {
  "use strict";

  var MongoClient = require('mongodb').MongoClient
  var url = "mongodb://localhost:27017/test";

  /* List functions */
  function getLists(callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.find({}).toArray(function(err, result) {
        if(err != null) {
          callback({"success" : "false", "message":err});
        } else {
          callback(result);
        }
        db.close();
      });
    });
  }

  function addList(todolist, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.insertOne(todolist, function(err, result) {
        if(err == null) {
          callback({"success" : "false", "message":err});
        } else {
          callback({"success":"false", "message":result});
        }
        db.close();
      });
    });
  }

  function getListById(listId, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.find({"id":Number(listId)}).toArray(function(err, result) {
        if(err != null) {
          callback({"success" : "false", "message":err});
        } else {
          callback(result);
        }
        db.close();
      });
    });
  }

  function updateList(listItem, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.update({"_id":listItem._id},{$set:listItem}, function(err, result) {
        if(err != null) {
          callback({"success" : "false", "message":err});
        } else {
          callback(result);
        }
        db.close();
      });
    });
  }

  function deleteList(listId, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todolist');
      collection.remove({"id":listId}, function(err, result) {
        if(err != null) {
          callback({"success" : "false", "message":err});
        } else {
          callback(result);
        }
        db.close();
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
        db.close();
      });
    });
  }

  function getItemsByList(listId, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('todoitem');
      collection.find({"todolist":Number(listId)}).toArray(function(err, result) {
        if(err != null) {
          callback({"success" : "false", "message":err});
        } else {
          callback(result);
        }
        db.close();
      });
    });
  }

  /* Utils */
  function getLastId(collectionName, callback) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection(collectionName);
      collection.find({}).sort({"id":-1}).limit(1).toArray(function(err, result) {
        if(result.length > 0) {
          callback(result[0].id);
        } else {
          callback(0);
        }
        db.close();
      });
    });
  }

  exports.getLists = getLists;
  exports.getListById = getListById;
  exports.addList = addList;
  exports.getLastId = getLastId;
  exports.getItemsByList = getItemsByList;
  exports.addItem = addItem;
  exports.updateList = updateList;
  exports.deleteList = deleteList;
}())
