(function () {
  "use strict";

  var http = require('http');

  function handleRequest(request, response) {
    var max = 10;
    var min = 1;
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    response.end("<h1>"+ randomNum +"</h1>")
  }

  var server = http.createServer(handleRequest);

  server.listen(8080, function() {
    console.log('Listening port 8080');
  });

}());
