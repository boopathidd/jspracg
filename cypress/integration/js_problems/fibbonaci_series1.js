// Fibonacci series in JavaScript
// This section will discuss the Fibonacci series and how we can generate the Fibonacci series in JavaScript.

// Fibonacci series in JavaScript
// Fibonacci series is a series that generates subsequent series of numbers by the addition of the two previous numbers. The first two terms of the Fibonacci series are zero and one, respectively. And the next terms are the addition of the two previous terms.

// Representation of the Fibonacci series
// Fn = (Fn -1) + (Fn - 2)

// Fn represents the addition of the previous terms (Fn - 1) and (Fn - 2). Here Fn-1 is the first terms, and Fn-2 is the second terms of the Fibonacci series.

// Example:

// First terms of the series is: 0
// Second term of the series is: 1
// Third terms of the series is: (0 + 1) = 1
// Fourth terms of the series is: (second + third) term = (1 + 1) = 2
// Fifth term of the series is: (Third + fourth) = 1 + 2 = 3
// Here is generated series: 0, 1, 1, 2, 3, … Similarly, we can find the series of the next terms.

// Steps to find the Fibonacci series of n numbers
// Following are the steps to find the series of the Fibonacci Series:

// Step 1: Declare the variables x, y, z, n, i

// Step 2: Initialize the local variable x = 1, y = 1, i = 2

// Step 3: Read a number from the user

// Step 4: Display the value of x and y

// Step 5: Repeat the process of Fibonacci series until i > n



// z = x + y
// Display the value of z
// x = y, y = z
// i = i + 1
// Step 6: Stop the execution of the Fibonacci series





// declaration of the variables  
var n1 = 0,  n2 = 1, next_num, i;  
var num = 10;  
console.log( "Fibonacci Series: ");  
for ( i = 1; i <= num; i++)  
{  console.log (" <br> " +  n1); // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}  


