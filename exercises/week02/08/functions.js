function a() {
  document.getElementById('name').setAttribute('type', 'text');
  document.getElementById('gender').setAttribute('type', 'text');
  document.getElementById('phone').setAttribute('type', 'text');
}

function b() {
  document.getElementById('linklist').setAttribute('style', 'display:block;');
}

function validateInfo() {
  // Values from form.
  var name = document.getElementById('name').value;
  var gender = document.getElementById('gender').value;
  var phone = document.getElementById('phone').value;

  // Regex strings
  var phoneReg = /^((([\+][\s]{0,1})|([0]{2}[\s-]{0,1}))([358]{3})([\s-]{0,1})|([0]{1}))(([1-9]{1}[0-9]{0,1})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1}))([0-9]{0,3}){1}$/;
  var nameReg = /[A-Z]{1}[a-z]{2,}/;
  var genderReg = /male|female|cheeseburger|apachehelicopter/;

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
var clickAmount = 0;

function runAway(element) {
  clickAmount += 1;
  var link = document.getElementById('fblink');

  if(clickAmount < 10) {
    var maxY = window.innerHeight;
    var maxX = window.innerWidth;

    var x = Math.floor((Math.random() * maxX) + 1);
    var y = Math.floor((Math.random() * maxY) + 1);
    console.log("" + x + ", " + y);
    link.style.position = 'fixed';
    link.style.top = y;
    link.style.left = x;
  } else if(clickAmount < 11) {
    alert("Back to work peasant!");
  } else {
    open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}
