// JavaScript Hoisting
// Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. So, in JavaScript we can use variables and functions before declaring them.

// JavaScript hoisting is applicable only for declaration not initialization. It is required to initialize the variables and functions before using their values.

// JavaScript Hoisting Example
// Here, we will use the variable and function before declaring them


//variable hoisting
x=10;  
console.log(x);  
var x;  



//function hoisting



console.log(sum(10,20));  
function sum(a,b)  
{  
return a+b;  
}  