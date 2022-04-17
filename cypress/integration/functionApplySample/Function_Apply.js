//JavaScript Function apply() method
//Let's see an example to determine the maximum element.



var arr = [7, 5,10, 1];  
var max = Math.max.apply(null, arr);  
console.log("max value is "+max);


//Let's see an example to determine the minimum element.

var min = Math.min.apply(null, arr);  
console.log("min value is "+min);


//Let's see an example to join arrays of same type.


var array = [1,2,3,4];  
var newarray=[5,6,7,8]  
array.push.apply(array, newarray); 
console.log("array is "+array)




//Let's see an example to join array of different type.

var arry = [1,2,3,4];  
var newarry=["One","Two","Three","Four"]  
arry.push.apply(arry, newarry); 
console.log("arry"+arry)






