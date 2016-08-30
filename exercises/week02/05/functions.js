function a() {
    function max(num1, num2) {
        console.log(num1);
        console.log(num2);
        if (Number(num1) > Number(num2)) {
            console.log(num1 + "is bigger");
            return num1;
        } else {
            return num2;
            console.log(num2 + "is bigger");
        }
    }

    var num1 = prompt("Give number 1");
    var num2 = prompt("Give number 2");
    var bigger = max(num1, num2);
    document.write("Bigger one: " + bigger);
}

function b() {
    function isPalindrom(word) {
        var reversed = "";
        
        for(var i = word.length; i >= 0; i--) {
            reversed += word.charAt(i);
        }
        
        if(reversed == word) {
            document.write("Word is palindrom!");
        }
        
        document.write(reversed);
    }
    
    var word = prompt("Give message");
    isPalindrom(word);
    
}

function c() {
    
    function createTable(rows, cols, value) {
        document.write("<table border='1'>");
        for(var h = 0; h < rows; h++) {
            document.write("<tr>");
            for(var w = 0; w < cols; w++) {
                document.write("<td>");
                document.write(value);
                document.write("</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
    }
    
    var height = window.prompt("Give height");
    var width = window.prompt("Give width");
    var value = window.prompt("Give value");
    
    createTable(height, width, value);
}

function d(){
    function isPositive(value, onSuccess, onFail) {
        if(Number(value) > 0) {
            onSuccess();
        } else {
            onFail();
        }
    }
    
    var value = -10;
    
    isPositive(value, 
               function(){
                    document.write("Success")
                }, 
               function(){
                document.write("Failed")
                });
    
}
