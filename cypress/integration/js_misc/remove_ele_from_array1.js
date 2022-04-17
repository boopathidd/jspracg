function removeElement() {    
    var shoeBrand = ["Nike", " Adidas", " Sparks", " RedTape"];    
  
    //initial length of the array  
    console.log("Elements in array before removing: <br>" + shoeBrand + "<br> <br>");  
    console.log("Array length before removing elements is:" + shoeBrand.length + "<br> <br>");  
       
    while (shoeBrand.length) {  
    //store removed element in a variable  
    var poppedElement = shoeBrand.pop();    
      
    //display removed element   
    console.log("Removed element from array: " + poppedElement + " <br>");   
    }  
      
    //Length of the array after removing all elements  
    console.log("<br> Array length after removing elements is:" + shoeBrand.length);  
   
}  
removeElement();  
