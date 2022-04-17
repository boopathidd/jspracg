//The JavaScript array sort() method is used to arrange the array elements in some order. By default, sort() method follows the ascending order.


var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
var result=arr.sort();  
console.log(result);  



var arr1=[2,4,1,8,5];  
var result1=arr1.sort();  
console.log(result1);



var arr3=[2,4,1,8,5];  
var result3=arr3.sort(function compare(a,b)  
{  
  return a-b;  
});  
console.log(result3);  




var arr4=[2,4,1,8,5];  
var result4=arr4.sort(function compare(a,b)  
{  
  return b-a;  
});  
console.log(result4); 





var arr5=[2,4,1,8,5]  
var result5=arr5.sort(); //1,2,4,5,8  
console.log(arr5[0]);  



var arr6=[2,4,1,8,5]  
var result6=arr6.sort().reverse(); // 8,5,4,2,1  
console.log(arr6[0]);  




