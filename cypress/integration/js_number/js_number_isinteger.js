//The JavaScript number isInteger() method determines whether the given value is an integer. It returns true if the value is an integer, otherwise it returns false.
//Here, we will understand isInteger() method through various examples.


var x=0;  
var y=1;  
var z=-1;  


console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));




function check(x,y)  
{  
  return x/y;  
}  
console.log(Number.isInteger(check(12,2)));  
console.log(Number.isInteger(check(12,5))); 









console.log(Number.isInteger(2.5));  
console.log(Number.isInteger(-2.5));  
console.log(Number.isInteger('2.5'));  
console.log(Number.isInteger(Infinity));  
console.log(Number.isInteger(-Infinity));  
console.log(Number.isInteger(NaN)); 




//Let's see an example to fix a number up to given decimal point.



var a=98.9721;  
document.writeln(a.toPrecision(2));  


