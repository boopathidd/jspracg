//The JavaScript string charAt() method is used to find out a char value present at the specified index in a string.

//The index number starts from 0 and goes to n-1, where n is the length of the string. The index value can't be a negative, greater than or equal to the length of the string.

var str="Javatpoint";  
console.log(str.charAt(4));  





//In this example, we will not pass an index value.
var str1="Javatpoint";  
console.log(str1.charAt());//print first character  



//In this example, we will print the last character.
var str2="Javatpoint";  
console.log(str2.charAt(str2.length-1));