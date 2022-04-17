//Using debugger keyword
//In debugging, generally we set breakpoints to examine each line of code step by step. 
//There is no requirement to perform this task manually in JavaScript.

//JavaScript provides debugger keyword to set the breakpoint through the code itself. 
//The debugger stops the execution of the program at the position it is applied. Now, we can start the flow of execution manually.
// If an exception occurs, the execution will stop again on that particular line.


x = 10;  
y = 15;  
z = x + y;  
debugger;  
console.log(z);  
console.log(x);  