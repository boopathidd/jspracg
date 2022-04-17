//The JavaScript array filter() method filter and extract the element of an array that satisfying the provided condition. It doesn't change the original array.


var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;    
}  
  
console.log(marks.filter(check));  




