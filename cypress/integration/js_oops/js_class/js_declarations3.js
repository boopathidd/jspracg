//Class Declarations Example: Re-declaring Class
//A class can be declared once only. If we try to declare class more than one time, it throws an error.


//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  console.log(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
//Re-declaring class  
class Employee  
  {  
  }  