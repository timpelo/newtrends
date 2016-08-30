var escapedString = "This is \"string\" with quote";
document.write(escapedString);

var strValue = "4" + 3 + 1; 
var strValueTwo = 4 + 3 + "1";

document.write("<br />");
// Prints out as string because first variable is string.
document.write(strValue);
// JS executse addition because fist var is number. JS converst last string into number.
document.write("<br />");
document.write(strValueTwo);

var firstResult = "35" - 3; 
var secondResult = 30 / "3";
var thirdResult = "3" * 3; 

// If anything else than + sign is used, JS automaticly converst variables to numbers.
document.write("<br />---------------------<br />");
document.write(firstResult);
document.write("<br />");
document.write(secondResult);
document.write("<br />");
document.write(thirdResult);
document.write("<br />");

// Prints undefined.
var something;
document.write(something);
document.write("<br />");

// JS array can hold items of any type!
var array = [true, "Hello", 10];
document.write(array[0]);
document.write("<br />");
document.write(array[1]);
document.write("<br />");
document.write(array[2]);
document.write("<br />");

// Pop removes last item from array and returns it
var last = array.pop();
document.write(last);
document.write("<br />");
var last = array.pop();
document.write(last);
document.write("<br />");