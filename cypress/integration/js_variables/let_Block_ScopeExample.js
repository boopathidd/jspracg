function checkBlockScope() {  
    {  
      let x = 30;  
      // initial value of x will print here  
     // document.write('Initial value of x: ' + x);  
  console.log('Initial value of x: ' + x);       
      xx = x + 7;    
      // updated value of x will print  
      console.log('<br> Value of x inside the block: ' + x); 
//      document.write('<br> Value of x inside the block: ' + x);  
    }  
    // the value of x will not print here  
//    document.write('<br> Value of x outside the block: ' + x);  
    console.log('<br> Value of x outside the block: ' + x); 
 
}  
    
  checkBlockScope()  