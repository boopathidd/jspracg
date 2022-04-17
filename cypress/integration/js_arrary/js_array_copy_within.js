//It copies the part of the given array with its own elements and returns the modified array.



var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// place at 0th position, the element between 1st and 2nd position.  
var result=arr.copyWithin(0,1,2);  
console.log(result);


var array1=["AngularJS","Node.js","JQuery","Bootstrap"]  
// place from 0th position, the elements between 1st and 3rd position.  
var resultsw=array1.copyWithin(0,1,3);  
console.log(resultsw);



var arrad=["AngularJS","Node.js","JQuery","Bootstrap"];  
// place from 1st position, the elements after 2nd position.  
var resultkl=arrad.copyWithin(1,2);  
console.log(resultkl);  


var arruki=["AngularJS","Node.js","JQuery","Bootstrap"];  
// place from 2nd position, the elements after 0th position.  
var resultlo=arruki.copyWithin(2); 
console.log(resultlo);  
