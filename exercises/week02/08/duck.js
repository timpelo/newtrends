var rowCount;
var table;
var div;

var duck = "duck.png";
var white = "white.jpg";

var duckX = 0;
var duckY = 0;

window.onload = function() {
  rowCount = 1;
  table = document.getElementById('ducktable');
  div = document.getElementById('duckdiv');
}


function c() {
 div.setAttribute('style', 'display:block');
}

function addRow() {
  if(rowCount < 10) {
    var row = table.insertRow(rowCount);
    rowCount++;

    for(var i = 0; i < 4; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = "<img src='" + white + "'/>"
      cell.setAttribute('id', ""+(rowCount-1)+"_"+i);
    }
  }
}

function removeRow() {
  if(rowCount > 1) {
    table.deleteRow(rowCount - 1);
      rowCount--;
  }
}

function moveDuck(direction) {
  console.log(direction);
  var movementX = 0;
  var movementY = 0;
  switch (direction) {
    case 'up':
    // up
      movementY = -1;
      break;
    case 'left':
    // left
      movementX = -1;
      break;
    case 'right':
    // right
      movementX = +1;
      break;
    case 'down':
    // down
      movementY = +1;
      break;
    default:
  }

  var newX = duckX + movementX;
  var newY = duckY + movementY;

  var currentElement = document.getElementById(''+duckY+'_'+duckX);
  var nextElement = document.getElementById(''+newY+'_'+newX);

  if(currentElement == null) {
    div.innerHTML = "GAME OVER!";
    return;
  }
  console.log(nextElement);
  console.log(''+duckY+'_'+duckX);
  console.log(''+newY+'_'+newX);
  if(nextElement != null) {
    currentElement.innerHTML = '';
    nextElement.innerHTML = '';
    nextElement.innerHTML = "<img src='"+duck+"' />";
    currentElement.innerHTML = "<img src='"+white+"' />"
    duckX = newX;
    duckY = newY;
  }
}
