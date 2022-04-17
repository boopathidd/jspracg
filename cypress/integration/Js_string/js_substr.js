//The JavaScript string substr() method fetch the part of the given string and return the new string. The number of characters to be fetched depends upon the length provided with the method. This method doesn't make any change in the original string.




var str="Javatpoint";  
console.log(str.substr(0,4));  



//In this example, we will provide only the starting index.


var str1="Javatpoint";  
console.log(str1.substr(5,5));  



//In this example, we will not pass any parameter with the method. In such case, the method returns the complete string.


var str2="Javatpoint";  
console.log(str2.substr(5)); 


//In this example, we will provide negative number as a starting index. In such case, the method starts fetching from the end of the string.


var str3="Javatpoint";  
console.log(str3.substr());  





var str4="Javatpoint";  
console.log(str4.substr(-5,5)); 