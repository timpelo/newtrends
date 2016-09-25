(function () {
  "use strict";

  var http = require('http');

  function executePost(request, response) {
    if(request.url == "/employees") {
      response.end("Add new employee");
    }
  }

  function executeGet(request, response) {
    var url = splitUrl(request.url);
    if(url[1] == "employee" && isNumber(url[2])) {
      response.end("Get employee " + url[2]);
    } else if(url[1] == "employees") {
      response.end("Get all employees");
    } else {
      response.end("Data not allowed");
    }
  }

  function isNumber(value) {
    return !isNaN(parseFloat(value));
  }

  function splitUrl(requestUrl) {
    var array = requestUrl.split("/");
    return array;
  }

  function handleRequest(request, response) {
    switch(request.method) {
      case "POST":
        executePost(request, response);
        break;
      case "GET":
        executeGet(request, response);
        break;
      default:
        request.end("Not allowed method");
    }
  }

  var server = http.createServer(handleRequest);

  server.listen(8080, function() {
    console.log('Listening port 8080');
  });

}());
