var weight = arguments[0];
var height = arguments[1];

function isNumber(obj) { return !isNaN(parseFloat(obj)) }

if(isNumber(weight) && isNumber(height)) {
  var bmi = weight/(height*height);

  if(Number(bmi) < 18.5) {
    print("Alipainoinen");
  } else if(Number(bmi) < 24.9)  {
    print("Normaali");
  } else if(Number(bmi) < 29.9)  {
   print("Ylipaino");
  } else {
    print("Salille heti!");
  }
  
} else {
  print ("Incorrect input");
}
