const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: 42,  
  value: 52,  
  value: 542,  
  });  
object1.property1 = 177;  
// throws an error in strict mode  
console.log(object1.property1); 