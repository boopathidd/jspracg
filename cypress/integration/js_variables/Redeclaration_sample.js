//See the below examples to understand which variable declaration is allowed and which one is not. The variable declaration is allowed anywhere in the program using var.



//Example 1



var num = 6;  
//num is 6 here  
  
var num = 3;  
//num is 3 here  











//Example 2

var nums = 6;  
let nums = 2;            //redeclaration is not allowed using let  



//Example 3

let nume = 6;             // allowed  
  
let nume = 2;            // not allowed  



//Example 4

let numr = 61;             // allowed  
{  
       let numr = 29;            // allowed  
}  
{  
       let numr = 37;            // allowed  
}  
