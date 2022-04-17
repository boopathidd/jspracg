const value= 8;  
 try {  
         value= 10;  
}   
     catch (e) {  
  console.log(e);     
} //will display a TypeError
console.log(value);  