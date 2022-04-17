//The JavaScript array splice() method is used to add/remove the elements to/from the existing array.
// It returns the removed elements from an array. The splice() method also modifies the original array.



//Let's see an example to add an element to the existing array without removing other elements.




var arr=["Monday","Tuesday","Thursday","Friday"];  
var result=arr.splice(2,0,"Wednesday")  
console.log(arr);




var arr1=["Monday","Tuesday","Sunday","Friday"];  
var result1=arr1.splice(2,1,"Wednesday","Thursday");  
console.log("Updated array: "+arr1+"<br>");  
console.log("Removed element: "+result1);  




var arr3=["Monday","Tuesday","Saturday","Sunday","Thursday","Friday"];  
var result3=arr3.splice(2);  
console.log("Updated array: "+arr3+"<br>");  
console.log("Removed element: "+result3);  