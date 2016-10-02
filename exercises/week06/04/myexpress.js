(function() {
  "use strict";

  var express = require('express');
  var app = express();

  app.get("/employees", function(req, res) {
    res.send('fetching all employees');
  });

  var regex = /employees\/[0-9]+/
  app.get(regex, function(req, res) {
    res.send('fetching employee with id');
  });

  var server = app.listen(3000, function() {
    console.log('listening port 3000');
  });

}())
