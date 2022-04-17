// The reduce () method is the type of method that reduce the elements of the array and then combine those values/elements of the array into a final array which is based on our specified reducer function.

// Below is a code implementation for reducing the elements from the array:


var array=["you","me","I","you","me","I"];  
function reduceDuplicates(new_array){  
let collect=new_array.reduce(function (a,b){  
if(a.indexOf(b)<0) a.push(b);  
return a;  
},[]);  
return collect;  
}  
console.log(reduceDuplicates(array));  