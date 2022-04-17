function m(){  
window.value=100;//declaring global variable by window object  
}  
function n(){  
console.log(window.value);//accessing global variable from other function
}  
m();
n();
//Now it can be declared inside any function and can be accessed from any function. For example:

