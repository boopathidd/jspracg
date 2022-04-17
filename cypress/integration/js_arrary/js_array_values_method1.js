//The values() method creates a new array iterator object that carries the values specified at each array index. We can iterate the array elements via loops or iterator methods.


//It creates and returns a newly created array iterator object.


var arr = ["John","Mary","Tom","Harry","Sheero"]; //Intializing array elements  
var itr = arr.values(); //Using values() method.  
//document.write("The array elements are:<br>");  
for (let x of itr) {   
    console.log("<br>"+x);  
}  //This iterates the array elements through its index value.  

