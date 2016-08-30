// a)
var height = 100;
var width = 100;

while(height > 10 || height < 1) {
    height = window.prompt("Give height 1-10");
}

while(width > 10 || width < 1) {
    width = window.prompt("Give width 1-10");
}

document.write("<table border='1'>");
for(var h = 0; h < height; h++) {
    document.write("<tr>");
    for(var w = 0; w < width; w++) {
        document.write("<td>");
        document.write("Hello");
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// b)
document.write("<h1>NAVIGATOR</h1><br />");
document.write("<table border='1'>");
for (var obj in navigator) {
    document.write("<tr><td>" + obj + "</td></tr>");
}
document.write("</table>");

document.write("<h1>WINDOW</h1><br />");
document.write("<table border='1'>");
for (var obj in window) {
    document.write("<tr><td>" + obj + "</td></tr>");
}
document.write("</table>");

// c)
// Changes location of browser. This goes to google.
//window.location = "http://www.google.fi";

document.write(navigator.userAgent);
