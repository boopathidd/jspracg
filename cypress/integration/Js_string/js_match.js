//The JavaScript string match() method is used to match the string against a regular expression. We can use global search modifier with match() method to get all the match elements otherwise the method return only first match.


//Let's see a simple example to search for a match.


var str="Javatpoint";  
console.log(str.match("Java"));  




//In this example, we will search for a regular expression using global flag.
var str1="Javatpoint";  
console.log(str1.match(/Java/g));  


//Let's see one more example to search for a regular expression using global flag. As match() method is case-sensitive, it return null in this case.

var str2="Javatpoint";  
console.log(str2.match(/java/g));  



//We can ignore case-sensitive behaviour of match() method by using ignore flag. Let's understand with the help of example:

var str3="Javatpoint";  
console.log(str3.match(/java/gi));  




//Here, we will print the array of matched elements.

var str4="Javatpoint";  
console.log(str4.match(/[a-p]/g));  




//Let's see the same example without using global search.

var str5="Javatpoint";  
console.log(str5.match(/[a-p]/));//return the first match













