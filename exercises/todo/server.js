(function() {
  "use strict";
  // Load modules
  var express = require('express');
  var mongo = require('./mongo-client');
  var bodyParser = require('body-parser');
  var app = express();

  var lastListId = mongo.getLastId('todolist', function(result) {
    lastListId = result;
    console.log("Last list " + lastListId);
    return result;
  });
  var lastItemId = mongo.getLastId('todoitem', function(result) {
    lastItemId = result;
    console.log("Last item " + lastItemId);
    return result;
  });

  // Configuration
  app.use(bodyParser.json());
  app.use(express.static('client'));

  /* Endpoints for maganing todo lists */

  // Gets all todo lists.
  app.get("/list", function(req, res) {
    mongo.getLists(function(result) {
      res.json(result)
    });
  });

  // Gets specific todo list.
  app.get("/list\/:listId([0-9]+?)$", function(req, res) {
    mongo.getListById(req.params.listId, function(result) {
      res.json(result);
    })
  });

  // Adds new list to the database.
  app.post("/addList", function(req, res) {
    var name = req.body.name;
    var desc = req.body.description;

    if(name != null && desc != null) {
      var todoList = TodoList(name, desc);
      mongo.addList(todoList, function(result) {

        if(result.success === "true") {
          lastListId += 1;
        }
        res.json(result);
      })
    } else {
      res.json({"success":"false", "description":"Invalid name or description"});
    }
  });

  /* Endpoints for managin todo items */
  app.post("/addItem", function(req, res) {
    var name = req.body.name;
    var desc = req.body.description;
    var listId = req.body.listId;

    if(name != null && desc != null && listId != null) {
      var todoItem = TodoItem(name, desc, listId);
      mongo.addItem(todoItem, function(result) {

        if(result.success === "true") {
          lastItemId += 1;
        }
        res.json(result);
      })
    } else {
      res.json({"success":"false", "description":"Invalid name or description"});
    }
  });

  app.get("/items\/:listId([0-9]+?)$", function(req, res) {
    mongo.getItemsByList(req.params.listId, function(result) {
      res.json(result);
    })
  });

  /* Server */
  var server = app.listen(8080, function() {
    console.log('listening port 8080');
  });

  /* Models */
  var TodoList = function(name, description) {
    var list = {
      "id":lastListId+1,
      "name":name,
      "description":description,
      "checked":0,
      "priority":1
    };

    return list;
  }

  var TodoItem = function(name, description, todoListId) {
    var item = {
      "id":lastItemId+1,
      "name":name,
      "description":description,
      "todolist":todoListId,
      "checked":0,
      "priority":1
    };

    return item;
  }

}())
