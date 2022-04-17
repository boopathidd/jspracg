//The JavaScript array every() method checks whether all the given elements in an array are satisfying the provided condition. It returns true when each given array element satisfying the condition otherwise false.


var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;  //return false, as marks[4]=20  
}  



console.log(check(10));