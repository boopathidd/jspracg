//In this example, we are setting the length of an array by using the array.length property. Initially, the array contains two elements, so at the beginning, the length is 2. Then we increase the length of the array to 9.

//In the output, the values of the array are separated by commas. After increasing the length, the array contains two defined and seven undefined values separated by a comma. Then we insert five array elements and print them. Now, the array contains seven defined and two undefined values.
var arr = [100, 200];  
console.log(" Before setting the length, the array elements are: " + arr);  
  
arr.length = 10;  
console.log("<br><br> After setting the length, the array elements are: " + arr);  
// It will print [ 1, 2, <7 undefined items> ]  
arr[2] = 300;  
arr[3] = 400;  
arr[4] = 500;  
arr[5] = 600;  
console.log("<br><br> After inserting some array elements: " + arr); 
console.log(arr.length);
console.log(arr);