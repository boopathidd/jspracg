//Let's see an example where a child class object invokes the parent class method.


class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
    
  }  
var b=new B();  
b.display();