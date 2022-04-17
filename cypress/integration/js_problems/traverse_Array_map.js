//In this example, we will traverse the whole array using map() function of JavaScript to perform Math.sqrt() operation on array elements. See how it will be done with JavaScript methods:


//initialize an array with value  
var numbers1= [4, 16, 36, 64, 100, 144, 196, 256, 324, 400];  
  
//call the user-defined function using map  
var numbers2 = numbers1.map(myFunction);  
  
//display the array elements before and after performing sqrt operation  
console.log("Inital array elements: " + numbers1);  
console.log("<br> <br>");  
console.log("Array after sqrt: " + numbers2);  
  
//function definition where perform sqrt on each element of array  
function myFunction(value, index, array) {  
  return Math.sqrt(value);  
}  