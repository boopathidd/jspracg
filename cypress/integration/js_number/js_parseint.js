//The JavaScript number parseInt() method parses a string argument and converts it into an integer value. 
//With string argument, we can also provide radix argument to specify the type of numeral system to be used.



var a="50";  
var b="50.25"  
var c="String";  
var d="50String";  
var e="50.25String"  
console.log(Number.parseInt(a)+"<br>");  
console.log(Number.parseInt(b)+"<br>");  
console.log(Number.parseInt(c)+"<br>");  
console.log(Number.parseInt(d)+"<br>");  
console.log(Number.parseInt(e));   




var aa="10";  
var bb="20";  
var cc=a+b;  
console.log("Before invoking parseInt(): "+cc+"<br>");  
var cc=Number.parseInt(aa)+Number.parseInt(bb);  
console.log("After invoking parseInt(): "+cc);  







var ad="50";  
console.log(Number.parseInt(ad,10)+"<br>");  
console.log(Number.parseInt(ad,8)+"<br>");  
console.log(Number.parseInt(ad,16));  





