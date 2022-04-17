//The JavaScript array fill() method fills the elements of the given array with the specified static values. This method modifies the original array. It returns undefined, if no element satisfies the condition.

var arr=["AngularJS","Node.js","JQuery"];  
var result=arr.fill("Bootstrap");  
console.log(arr);



var arr1=["AngularJS","Node.js","JQuery"];  
var result1=arr1.fill("Bootstrap",1);  
console.log(arr1);




var arr2=["AngularJS","Node.js","JQuery"];  
var result2=arr2.fill("Bootstrap",0,2);    
console.log(arr2);


//It fills elements into an array with static values.
