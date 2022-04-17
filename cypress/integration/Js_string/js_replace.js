//The JavaScript string replace() method is used to replace a part of a given string with a new substring. This method searches for specified regular expression in a given string and then replace it if the match occurs.

//We can use global search modifier with replace() method to replace all the match elements otherwise the method replace only first match. JavaScript also provides ignore flag to make the method case-insensitive.



//Let's see a simple example to replace a substring.


var str="Javatpoint";  
console.log(str.replace("tpoint","Script"));




//In this example, we will replace a regular expression using global search modifier.


var str1=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str1.replace(/Node.js/g,"AngularJS")); 



//In this example, we will replace a regular expression without using global search.

var str2=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str2.replace(/Node.js/,"AngularJS")); //It will replace only first match.  



//In this example, we will see that replace() method is case-sensitive.



var str3=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str3.replace(/Node.JS/g,"AngularJS")); 




//We can ignore case-sensitive behaviour of replace() method by using ignore flag modifier. Let's understand with the help of example:


var str4=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str5.replace(/Node.JS/gi,"AngularJS"));  