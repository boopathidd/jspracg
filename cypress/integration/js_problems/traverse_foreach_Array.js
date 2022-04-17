//This example will show you how forEach() method works with array elements. Firstly the array concatenated with forEach() method will call user-defined function. Then this function will print traverse all array elements and display them on the web. See the code below:
// declare an array and provide value in it   
var message = ["It", " is", " very", " beautiful", " day"];   
var index = 0;  
  
//call the user-defined function with array  
message.forEach(traverseArray);  
  
//definition of user-defined function  
function traverseArray(ele, index)  
{  
    //display the array elements using index   
    console.log(ele);  
}  