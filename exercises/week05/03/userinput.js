(function(){
  var readLine = require('readline')
  var fileSystem = require('fs');

  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function writeToFile(name) {
    fileSystem.appendFile("names.txt", name + "\n", function(err) {
      console.log(name + " added to the file!");
      printNames();
    });
  }

  function printNames() {
    var names = fileSystem.readFileSync("names.txt");
    console.log("Names in file:\n" + names.toString());
    rl.close();
  }

  rl.question("What is your name? \n", function(answer) {
    writeToFile(answer);
  });

}());
