//The JavaScript array findIndex() method returns the index of first element of the given array that satisfies 
//the provided function condition. It returns -1, if no element satisfies the condition.

var arr=[5,22,19,25,34];  
var result=arr.findIndex(x=>x>20);  
console.log(result);




function isPrime(value, index, arr) {  
    var start = 2;  
    while (start <= Math.sqrt(value)) {  
      if (value % start++ < 1) {  
        return false;  
      }  
    }  
    return value > 1;  
  }  
  console.log([8, 4, 7, 22].findIndex(isPrime));  

