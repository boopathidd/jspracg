//Traverse an array using every() method
//This method is different from the basic loops and forEach() method. It is basically used to traverse an array along with some conditions specified by the programmer. The every() method is a JavaScript function to test the specified condition with all elements of the array.

//It returns true if all elements satisfy the condition and pass the test (provided as a function). Otherwise, it returns false.



//define an array with elements  
var age = [22, 28, 36, 26, 34, 31];  
    
//put a condition to check all the values are greater then 18  
const adult = x => x > 18;   
    
if (age.every(adult)) {   
    //display the message if all array values are > 18  
    console.log('All are adults');   
}   
else {   
    //display the message if any one of them is less than 18  
    console.log('Atleast one is not adult');   
}   