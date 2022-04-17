//The JavaScript array find() method returns the first element of the given array that satisfies the 
//provided function condition.

var arr=[5,22,19,25,34];  
var result=arr.find(x=>x>20);  

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

  console.log([8, 4, 7, 22].find(isPrime));  
