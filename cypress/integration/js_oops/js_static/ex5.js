//Let's see an example to invoke a static method within the non-static method.


class Test {  
  static display() {  
      return "static method is invoked"  
  }  
    
 show() {  
  console.log(Test.display()+"<br>");   
  }    
}  
var t=new Test();  
t.show();  