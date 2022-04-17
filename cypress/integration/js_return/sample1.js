var x = fun();  
function fun() {  
var i = 1;  
  while(i) {   
    console.log(i + '<br>');  
      if (i == 4) {            
        return;  
      }  
      console.log(i + '<br>');  
      i++;  
    }  
  console.log('Hello world');  
}  