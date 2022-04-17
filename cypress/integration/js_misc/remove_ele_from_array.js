//Remove elements from array in JavaScript
//An array is a variable used to store one or more elements of the same data type. Basically, it stores multiple elements of the same type. Sometimes we need to remove these elements from an array. JavaScript offers several built-in array methods to add or remove the elements from an array easily. Using these methods, you can remove an element from start, end, or as well as from a specific index.


// pop()	This method removes the elements from the end of the array.
// shift()	Like the pop() method, it also removes the elements but from the start of the array.
// filter()	The filter() method removes the elements from an array in a programmatically way.
// splice()	This method removes the elements from a specific index.



//JavaScript provides the pop() method to remove the elements from the end of the array. It removes the last element of the array and returns the removed element. When an element removes from the array, the length of the array is reduced by 1. See the code and output below to understand:

function removeLastElement() {    
    var shoeBrand = ["Nike", " Adidas", " Sparks", " RedTape"];    
    
    console.log("Elements in array before removing: <br>" + shoeBrand + "<br> <br>");  
      
    // Removing last element from the array    
    var poppedElement = shoeBrand.pop();    
    console.log("Removed element from array: " + poppedElement + "<br> <br>");    
      
    //display remaining elements present in array after removing  
    console.log("Elements present in array: <br>" + shoeBrand);    
}    
removeLastElement();   



//Initially, there are four elements in the array. One element from the last will be removed using the pop() function and three elements will remain in that array.

