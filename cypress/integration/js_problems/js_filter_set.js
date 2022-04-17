//The Set () method is another method where a new Set is created or we can say a collection is created that stores unique values from the defined array. Below is the basic code implementation for the Set () method:

var array=["a","a","d","c","d"];  
function setDuplicates(new_array){  
return [...new Set(new_array)]  
}  
console.log(setDuplicates(array)); 