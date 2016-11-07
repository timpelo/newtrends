(function() {
  "use strict";
  // Load modules
  var express = require('express');
  var mongo = require('./mongo-client');
  var bodyParser = require('body-parser');
  var app = express();

  var serverPort = 8080;



  // Configuration
  app.use(bodyParser.json());
  app.use(express.static('client'));

  /* Endpoints for maganing player profiles*/

  // Gets players with filter.
  app.post("/players", function(req, res) {
    var filter = req.body.filter;

    if(filter != null && filter != undefined) {

    }

    res.json(filter);
  });


  /* Server */
  var server = app.listen(serverPort, function() {

  });

  /* Models */
  var Profile = function(name, platform, interest) {
    var profile = {
      "name":name,
      "platform":description,
      "interest":interest
    };

    return profile;
  }

  var JSONResponse = function(success, message) {
    var response = {
      "success":success,
      "message":message
    }

    return response;
  }

}())
