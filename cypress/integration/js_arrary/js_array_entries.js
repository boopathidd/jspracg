//JavaScript Array entries() Method
//It creates an iterator object and a loop that iterates over each key/value pair.


var arr=['John','Michael','Embrose','Herry','Lewis'];  
    var itr=arr.entries();  
    console.log("After applying the entries method:"+"<br>");  
  
    for(var e of itr) //for loop using var.  
    {  
console.log(e+"</br>"); 
    }  





    var arr1=['John','Michael','Embrose','Herry','Lewis']; // array elements  
    var itr1=arr1.entries();  
    console.log("a After applying the entries method:"+"<br>");  
  
    for(let e of itr1) // let declares a variable, but its scope is within the block.  
    {  
        console.log(e+"</br>"); 
    }  














