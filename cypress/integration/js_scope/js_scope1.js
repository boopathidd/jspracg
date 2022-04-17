//A scope can be defined as the region of the execution, a region where the expressions and values can be referenced.

//There are two scopes in JavaScript that are global and local:

//Global Scope: In the global scope, the variable can be accessed from any part of the JavaScript code.

//Local Scope: In the local scope, the variable can be accessed within a function where it is declared.


var $var12 = 200;     
    
function example() {      
    var $var12 = 300;     
    console.log("Inside example() function = " + $var12);     
}     
console.log("Outside example() function = "  + $var12);    
console.log("<br>");  
example();   


