//The values() method creates a new array iterator object that carries the values specified at each array index. We can iterate the array elements via loops or iterator methods.


//It creates and returns a newly created array iterator object.

var arr=["John","Tom","Sheero","Romy","Tomy"]; //Initialized array  
var itr=arr.values();  
console.log("The array elements are: <br>");  
console.log("<br>"+itr.next().value); //returns value at index 0.  
console.log("<br>"+itr.next().value); //returns value at index 1  
console.log("<br>"+itr.next().value); //returns value at index 2  
console.log("<br>"+itr.next().value); //returns value at index 3  
console.log("<br>"+itr.next().value); //returns value at index 4  
console.log("<br>"+itr.next().value); //returns undefined  