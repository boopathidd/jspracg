const value= 8;  
 try {  
         value= 10;  
}   
     catch (e) {  
        console.log(e);   
} //will display a TypeError   
console.log(value);  

//In the above code, it is seen that the const variable is assigned with a value but when we try to re-assign another value, an error is thrown which tells that the value described as const cannot be changed. Hence, the output of the above code is:
//In this section, we understood that static as well as const variable have different roles and are used for different purposes where a static variable can be used for a class method or property and a const variable is used for initializing a const value for an array, variable or an object.