"use strict";

//5.1
console.log("-------5.1-------");
function makeAdder(addValue) {

  return function(value) {
    return value + addValue
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(5));
console.log(add10(10));

//5.2
console.log("-------5.2-------");
function getPerson() {
  var obj = {};
  var n;
  var a;

  Object.defineProperty(obj, 'name', {
    get: function() {
      return n;
    },
    set: function(newValue) {
      n = newValue;
    },
    enumerable: true,
    writeable: true
  });

  Object.defineProperty(obj, 'age', {
    get: function() {
      return a;
    },
    set: function(newValue) {
      if(newValue < 0) {
        console.log('Invalid value');
      } else {
        a = newValue;
      }
    },
    enumerable: true,
    writeable: true
  });

  return obj;
}

var person = getPerson();
person.name = "Jussi";
console.log(person.name);
person.age = -2;
person.age = 22;
console.log(person.age);
