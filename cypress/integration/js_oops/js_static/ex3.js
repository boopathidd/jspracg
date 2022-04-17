//Let's see an example to invoke more than one static method with similar names.

class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
  static display()  
  {  
    return "static method is invoked again"  
  }  
}  
console.log(Test.display());  