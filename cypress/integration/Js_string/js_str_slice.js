//The JavaScript string slice() method is used to fetch the part of the string and returns the new string. It required to specify the index number as the start and end parameters to fetch the part of the string. The index starts from 0.

//This method allows us to pass a negative number as an index. In such case, the method starts fetching from the end of the string. It doesn't make any change in the original string.








var str = "Javatpoint";  
console.log(str.slice(2,5)); 



var str1 = "Javatpoint";  
console.log(str1.slice(0)); 



var str2 = "Javatpoint";  
console.log(str2.slice(4)); 






var str3 = "Javatpoint";  
console.log(str3.slice(-5));  

var str4 = "Javatpoint";  
console.log(str4.slice(-5,-1));  