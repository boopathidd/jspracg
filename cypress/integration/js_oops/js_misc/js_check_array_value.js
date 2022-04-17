//Check if the value exists in Array in Javascript
//In a programming language like Javascript, to check if the value exists in an array, there are certain methods.
// To be precise, there are plenty of ways to check if the value we are looking for resides amongst the elements 
//in an array given by the user or is predefined. Let's discuss these methods one by one using various examples.


//indexof() method
//The indexof() method in Javascript is one of the most convenient ways to find out whether a value exists in an array or not.
// The indexof() method works on the phenomenon of index numbers. 
//This method returns the index of the array if found and returns -1 otherwise. Let's consider the below code:



var army=["Marcos", "DeltaForce", "Seals", "SWAT", "HeadHunters"];  
  
if(army.indexOf("Marcos") !== -1)  
{  
        console.log("Yes, the value exists!")  
}   
else  
{  
    console.log("No, the value is absent.")  
}  
  



var specialForces=["BlackCats","Marcos", "Demolishers","HeadHunters"];  
var name = specialForces.includes("HeadHunters"); 
console.log(name); 





//////////////////////////////





//Using loops



var example_array = ['Rahul','Rajesh','Sonu','Siddhi','Mark','George'];  
  
function checkArray(value,array)  
{  
  var status = 'Absent';  
  
  for(var i=0; i<array.length; i++)  
{  
    var name = array[i];  
    if(name == value){  
      status = 'Present'; 
     
   
      break;  
    }  
  }  
  return status;  
}  

console.log(checkArray("Siddhi",example_array)) ;