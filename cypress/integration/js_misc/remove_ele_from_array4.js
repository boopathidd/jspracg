function removeElement() {    
    var shoeBrand = ["Nike", " Adidas", " Sparks", " RedTape", " Bata"];    
    
    console.log("Elements in array before removing: <br>" + shoeBrand + "<br> <br>");  
      
    // Removing first element from the array    
    var poppedElement = shoeBrand.splice(1, 3);    
    console.log("Removed element from array: " + poppedElement + "<br> <br>");    
      
    //display remaining elements present in array after removing  
    console.log("Elements present in array: <br>" + shoeBrand);    
}    
removeElement();   
