//The JavaScript array includes() method checks whether the given array contains the specified element. It returns true if an array contains the element, otherwise false.


var arr=["AngularJS","Node.js","JQuery"]  
var result=arr.includes("AngularJS");  
 
console.log(result);


var arrq=["AngularJS","Node.js","JQuery"]  
var resultq=arrq.includes("AngularJS",1); //returns false, as "AngularJS" is not present after index 1.  
console.log(resultq);


var arrr=["AngularJS","Node.js","JQuery"]  
var resultr=arrr.includes("angularjs");  
console.log(resultr);

