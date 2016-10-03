(function() {
  "use strict";

  var express = require('express');
  var mongo = require('./mymongo');
  var app = express();
  app.use(express.static('client'));

  app.get("/employees", function(req, res) {
    mongo.fetchAllFromDb(function(result) {
      res.json(result);
    });
  });

  app.get("/employees\/:id([0-9]+?)$", function(req, res) {

    mongo.fetchFromDb(req.params.id, function(result) {
      res.json(result);
    });
  });

  var server = app.listen(3000, function() {
    console.log('listening port 3000');
  });

}())
