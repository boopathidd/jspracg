//JavaScript String trim()
//The trim() is a built-in string function in JavaScript, which is used to trim a string. This function removes the whitespace from both the ends, i.e., start and end of the string. As the trim() is a string method, so it is invoked by an instance of the String class. We have to create an instance of String class with which the trim() method will be used.


//Note - The trim() method does not change the original string; it just removes the leading and trailing whitespace character.

//The string.trim() function returns the string after removing whitespace character from that string from the beginning and end of the string.


function func_trim() {   
    //original string with whitespace in beginning and end  
   var str = "     javatpoint tutorial website     ";   
 
   //string trimmed using trim()  
   var trimmedstr = str.trim();   
   console.log(trimmedstr);    
}   
func_trim();   


function func_triming() {   
    //original string with whitespace at the end  
    var str = "javatpoint tutorial website      ";   
  
    //string trimmed using trim()  
    var trimmedstr = str.trim();   
    console.log(trimmedstr);    
}   
func_triming();





function func_trimsa() {  
    //original string with whitespace in beginning   
    var str = "        javatpoint tutorial website";   
   
    //string trimmed using trim()  
    var trimmedstr = str.trim();   
    console.log(trimmedstr);    
}   
func_trimsa(); 







function func_trimleft() {  
    //original string with whitespace in beginning   
    var str = "     javatpoint tutorial website    ";   
  
    //string trimmed using trimLeft()  
    var trimmedstr = str.trimLeft();   
    console.log(trimmedstr);    
}   
func_trimleft();   