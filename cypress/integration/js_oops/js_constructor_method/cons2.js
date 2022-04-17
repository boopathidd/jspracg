//Constructor Method Example: super keyword
//The super keyword is used to call the parent class constructor. Let's see an example.

class CompanyName  
{  
  constructor()  
  {  
    this.company="Javatpoint";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
console.log(emp.id+" "+emp.name+" "+emp.company);  