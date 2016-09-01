var rowCount;
var table;
var div;

var duck = "duck.png";
var white = "white.jpg";

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

    for(var i = 0; i < 3; i++) {
      var cell = row.insertCell(0);
      cell.innerHTML = "<img src='" + white + "'/>"
    }
  }
}

function removeRow() {
  if(rowCount > 1) {
    table.deleteRow(rowCount - 1);
      rowCount--;
  }
}
