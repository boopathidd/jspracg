function test(element, index, array) {  
    return index < 4;  
  }  
  console.log([21,32,2,43].every(test)); //true  
  console.log([21,32,2,43,35].every(test)); //false  


  //In this example, we will test whether the number of elements present in an array are satisfying the specified value.
