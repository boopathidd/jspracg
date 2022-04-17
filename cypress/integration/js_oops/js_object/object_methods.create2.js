



function fruits() {  
  this.name = 'franco';  
  }  
 function fun() {  
  fruits.call(this)  
}  

  fun.prototype = Object.create(fruits.prototype);  
  const app = new fun();  
  console.log(app.name);  

