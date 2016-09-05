"use strict";

var testObject = {
  "name" : "Jack",
  "age" : 18,
  "gender" : "male"
}

Object.defineProperty(testObject, 'passowrd',
  {value:'verySecret', enumerable:false});

// Password is not show. It has been set to non-enumerable.
console.log(Object.keys(testObject));

Object.defineProperty(testObject, 'id', {value:101, writeable:false});
// Cannot assign read only property.
//testObject.id = 15;

Object.defineProperty(testObject, 'functionProperty', {
  get:function() {
    console.log("Using getter");
  },
  set:function() {
    console.log("Using setter");
  }
});

// Uses setter.
testObject.functionProperty = "Hello";
// Uses getter
testObject.functionProperty;

Object.seal(testObject);
// This works. Sealed object cannot be modified but existing properties can
// be modified
testObject.name = 'John';
console.log(testObject.name);

Object.freeze(testObject);
// This does not work. Freeze does what seal does but also prevents modifying
// all properties.
//testObject.name = 'Harry';

Object.preventExtensions(testObject);
// Can't add. Object is not extensible.
//testObject.lastName = "Russell";

// Can't use with when strict is enabled.
/*with(Math) {
  console.log(PI);
}*/
