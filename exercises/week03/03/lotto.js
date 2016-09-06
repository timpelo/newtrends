function main() {
  "use strict";
  var price = 0.2;
  var years = 0;
  var weeks = 0;
  var hits = 0;

  while(hits != 7) {
    var user = getUserInput();
    var lotto = getRandomNumbers();
    hits = howMany(lotto, user);
    weeks++;
    years = weeks/52;

    price += 0.2;
    console.log("Week " + weeks + ": " + hits + " hits.");
    console.log(parseInt(years) + " years gone and " + price + " spend");
  }

  console.log("GZ you won!");
}

function getUserInput() {
  "use strict";
  return [1,2,3,4,5,6,7];
}

function getRandomNumbers() {
  "use strict";
  var randomNums = [];

  for(var i = 0; i < 7; i++) {
    var randomNum = Math.floor((Math.random() * 39) + 1);
    if(!checkIfExists(randomNum, randomNums)) {
      randomNums.push(randomNum);
    } else {
      i--;
    }
  }

  return randomNums;
}

function checkIfExists(number, numberSet) {
  "use strict";
  var found = false;

  numberSet.some(function(element, index, array) {
    if(element === number) {
      found = true;
    }
  });

  return found;
}

function howMany(lotto, userInput) {
  "use strict";
  var hits = 0;

  lotto.forEach(function(entry) {
    if(checkIfExists(entry, userInput)) {
      hits++;
    }
  });

  return hits;
}

main();
