function removeElement() {   
    var clothingBrand = ["Gucci", " Chanel", "Gucci", " Zara"];   
    
    // for loop to trace the whole array  
    for (var i = 0; i < clothingBrand.length; i++) {   
          
        //Match the specific element in array  
        if (clothingBrand[i] === "Gucci") {   
            //remove the matched element from array  
            var delEle = clothingBrand.splice(i, 1);   
              
            console.log("<br> Removed element: " + delEle);   
            console.log("<br> Remaining elements: " + clothingBrand);   
            console.log("<br>");        }   
    }   
}   
removeElement();    