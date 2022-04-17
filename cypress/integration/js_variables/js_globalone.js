//A JavaScript global variable is declared outside the function or declared with window object. It can be accessed from any function.

var value=50;//global variable  
function a(){  
console.log(value);
}  
function b(){  
    console.log(value);  
}  
a();
b();