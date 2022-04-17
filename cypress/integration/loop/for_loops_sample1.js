function checkLoopScope() {
    let i = 4;
    for (let i = 0; i < 10; i++) {
     // some statements
    }
     // x is still known here and has a value.
     console.log('Final value of x outside of the loop: ' + i);
   }
   
   checkLoopScope()