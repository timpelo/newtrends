(function(){
  var readLine = require('readline')
  var fileSystem = require('fs');

  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askInfo() {
    var newPerson = {};

    rl.question("Give you first name, last name, email, country and ip in this order seperated with space \n", function(answer) {
      var arguments = answer.split(" ");
      newPerson.fname = arguments[0];
      newPerson.lname = arguments[1];
      newPerson.email = arguments[2];
      newPerson.country = arguments[3];
      newPerson.ip = arguments[4];
      rl.close();

      writeToFile(newPerson);
    });
  }

  function writeToFile(person) {
    var persons = JSON.parse(fileSystem.readFileSync("persons.txt"));
    persons.push(person);
    fileSystem.writeFile("persons.txt", JSON.stringify(persons) + "\n", function(err) {
      console.log(person + " added to the file!");
    });
  }

  askInfo();

}());
