//In this example, we will a declare variable with the same name in different blocks and display its value.


let num = 23;  
{   
  let num = 15;   
  console.log("num inside the function = " + num);   
}   
let num = 89;  
console.log("<br> num outside the function = " + num);   


//On executing the above code, this will generate an error because redeclaration is not allowed using let variable. So, it will not display any output on the browser.