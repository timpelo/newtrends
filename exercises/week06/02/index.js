(function() {
  "use strict";
  var mongo = require('mongodb');
  var readline = require('readline');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Name to lookup: \n', (answer) => {
    var url = "mongodb://localhost:27017/test";

    mongo.connect(url, function(err, db) {
      var collection = db.collection('employees');

      collection.find({"first_name":answer}).toArray(function(err, docs) {
        console.log(docs[0]);
      });

      db.close();
    });
    rl.close();
  });
}())
