function checkBlockScope() {
    {
      let x = 30;
      // initial value of x will print here
      console.log('Initial value of x: ' + x);
     
      x = x + 7;	
      // updated value of x will print

      console.log('<br> Value of x inside the block: ' + x);
    
    }
    // the value of x will not print here
    console.log('<br> Value of x outside the block: ' + x);
  }
  
  checkBlockScope()