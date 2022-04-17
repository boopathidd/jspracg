 
   function removeFirstElement() {    
    var shoeBrand = ["Nike", " Adidas", " Sparks", " RedTape"];    
    
    console.log("Elements in array before removing: <br>" + shoeBrand + "<br> <br>");  
      
    // Removing first element from the array    
    var poppedElement = shoeBrand.shift();    
    console.log("Removed element from array: " + poppedElement + "<br> <br>");    
      
    //display remaining elements present in array after removing  
    console.log("Elements present in array: <br>" + shoeBrand);    
}    
removeFirstElement();  