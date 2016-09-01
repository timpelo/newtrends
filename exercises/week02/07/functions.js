function a() {
    open("http://www.w3schools.com/jsref/met_win_open.asp");
}


function b() {
  document.getElementById('weight').setAttribute('type', 'text');
  document.getElementById('height').setAttribute('type', 'text');
  document.getElementById('bmi').setAttribute('type', 'text');

}

function calcBmi() {
  var weight = document.getElementById('weight').value
  var height = document.getElementById('height').value

  if(weight != null && height != null) {
    var result = weight/(height*height);
    document.getElementById('bmi').value = result;

    var resultField = document.getElementById('description');
    if(Number(result) < 18.5) {
      resultField.innerHTML = "Alipainoinen";
    } else if(Number(result) < 24.9)  {
      resultField.innerHTML = "Normaali";
    } else if(Number(result) < 29.9)  {
     resultField.innerHTML = "Ylipaino";
    } else {
      resultField.innerHTML = "Salille heti!";
    }
  }
}

function c() {
  document.getElementById('name').setAttribute('type', 'text');
  document.getElementById('gender').setAttribute('type', 'text');
  document.getElementById('phone').setAttribute('type', 'text');
}

function validateInfo() {
  // Values from form.
  var name = document.getElementById('name').value;
  var gender = document.getElementById('gender').value;
  var phone = document.getElementById('phone').value;

  // Regex strings
  var phoneReg = /^((([\+][\s]{0,1})|([0]{2}[\s-]{0,1}))([358]{3})([\s-]{0,1})|([0]{1}))(([1-9]{1}[0-9]{0,1})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1}))([0-9]{0,3}){1}$/;
  var nameReg = /[A-Z]{1}[a-z]{2,}/;
  var genderReg = /man|female|cheeseburger|apachehelicopter/;

  // Validate checks.
  if(!phone.match(phoneReg)) {
    document.getElementById('phoneDesc').innerHTML = 'Not valid!';
  } else {
    document.getElementById('phoneDesc').innerHTML = 'Valid!';
  }

  if(!name.match(nameReg)) {
    document.getElementById('nameDesc').innerHTML = 'Not valid!';
  } else {
    document.getElementById('nameDesc').innerHTML = 'Valid!';
  }

  if(!gender.match(genderReg)) {
    document.getElementById('genderDesc').innerHTML = 'Not valid!';
  } else {
    document.getElementById('genderDesc').innerHTML = 'Valid!';
  }
}

function d() {

    var Person = function (fname_, lname_) {
        this.fname = fname_;
        this.lname = lname_;
        this.age = 0;

        this.setAge = function(age_) {
            this.age = age_;
        }
    }

    var person = new Person("Martti", "Lutteri");
    person.setAge(15);
    document.write(person.fname + " " + person.lname + " " + person.age);
    console.log(window);
}
