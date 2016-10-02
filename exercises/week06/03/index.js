(function() {
  "use strict";

  var readline = require('readline');
  var mymongo = require('./mymongo');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Name to lookup: \n', (answer) => {
      mymongo.fetchFromDb(answer, function(result) {
        console.log(result);
      });
    rl.close();
  });
}())
