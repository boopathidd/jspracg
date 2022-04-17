function show(){   
    let num = 15;   
    console.log("Inside the function num = " + num);   
}   
show();   
console.log("<br> Outside the function num = " + num); 


//In this example, you will see that a variable declared inside the function that only has function scope.
// So, it is not allowed to access outside the function.


//Here, you will see that only the first statement that lies inside the function has been printed and second statement
// has not been displayed. It treated num is undefined outside the function scope.