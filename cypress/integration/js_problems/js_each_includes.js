//The includes () method is the one that returns false, if an element is not present in the given array and returns true if the element is present in the array. The forEach is the loop that will help us to iterate over the values present in the array.

//Below is an example code that will help you understand the working of these methods to remove duplicate values from an array:
var array=["John","Merry","Ada","Merry","Michael"];  
function duplicates(new_array){  
let collect=[];  
new_array.forEach(value=>{  
 if(!collect.includes(value))  
 {  
  collect.push(value)  
 }  
});  
return collect;  
}  
console.log(duplicates(array));  