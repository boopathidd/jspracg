//Let's see an example where a child and parent class contains the same method. Here, the object of child class invokes
// both classes method.

class A  
  {  
     display()  
    {  
      console.log("A is invoked<br>");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  