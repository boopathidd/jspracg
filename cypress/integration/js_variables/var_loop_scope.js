function checkLoopScope() {  
    var i = 4;  
    for (var i = 0; i < 10; i++) {  
     // some statements  
    }  
     // updated value of i will display  
console.log('Final value of x outside of the loop: ' + i);  
 
   }  
     
   checkLoopScope() 