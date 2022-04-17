//The JavaScript string search() method is used to search the regular expression in the given string. 
//This method returns -1, if match is not found.


var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search("scripting"));  




var str1="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str1.search(/Scripting/));  



var str2="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str2.search(/Scripting/i));  




var str3="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str3.search(/Javatpoint/));  