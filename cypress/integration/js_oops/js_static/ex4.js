//Let's see an example to invoke a static method within the constructor.
class Test {  
  constructor() {  
  console.log(Test.display()+"<br>");   
  console.log(this.constructor.display());   
  }  
  
  static display() {  
      return "static method is invoked"  
  }  
}  
var t=new Test();  
