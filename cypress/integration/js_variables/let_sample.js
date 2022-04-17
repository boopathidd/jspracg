function checkGlobalScope() {

    // x is declared yet so not available here
 console.log('Value of x before the block: ' + x);
    {
        var x = 20;
        x = x + 8;
    }
    // x is still known here and has a value.
    console.log('a Value of x before the block: ' + x);
}
  
  //x is declared inside the function, so not available here 
  checkGlobalScope()