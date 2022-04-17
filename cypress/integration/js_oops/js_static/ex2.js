//Let's see an example to invoke more than one static method.
class Test  
{  
  static display1()  
  {  
    return "static method is invoked"  
  }  
  static display2()  
  {  
    return "static method is invoked again"  
  }  
}  
console.log(Test.display1()+"<br>");  
console.log(Test.display2());  