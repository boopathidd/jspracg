//Internals of global variable in JavaScript
//When you declare a variable outside the function, it is added in the window object internally.
// You can access it through window object also. For example


var value=50;  
function a(){  
    console.log(window.value);
//alert(window.value);//accessing global variable   
}  
a();