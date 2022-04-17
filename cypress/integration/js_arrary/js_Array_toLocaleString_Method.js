//The toLocaleString() method creates a string that represents the elements of an array. 
//It converts the array elements into the string.


var arr=["ram","shyam","Heera"]; // an array is defined.  
var str=arr.toLocaleString(); //using array toLocaleString() method  
console.log("The array is represented in the string form as:  "+str); 
// This will  return the array elements in the 
//form of string. 



//Implementing an example that combines the array elements and a value together into a new array.


var arr = ["John","Tom","Mary","Herry","Sheero" ]; //Defining an array  
var val = 5; //Intializing the value of val.  
var netarr = [ arr,val ];  //Creating a new array that combines both initialized variables.  
var str = netarr.toLocaleString(); //Using the method  
console.log("The netarr gets converted into string as: "+str); //Converting to string. 