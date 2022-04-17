//The filter () method is used for fetching the duplicate values from the array. The method creates a new array of elements in which we pass the specific condition, and if any such element returns false or fails out, it will not be a filtered array.

//Let's implement an example where we will filter out the array values using the filter () method. The example is shown below:



var array=["x","w","d","w","x"];  
function filterDuplicates(new_array){  
return new_array.filter((value,index) =>new_array.indexOf(value)===index);  
}  
console.log(filterDuplicates(array));  