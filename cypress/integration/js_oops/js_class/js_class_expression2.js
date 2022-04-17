//Named Class Expression Example

//We can express the class with the particular name. Here, the scope of the class name is up to the class body. 
//The class is retrieved using class.name property.

var emp = class Employee {  
    constructor(id, name) {  
      this.id = id;  
      this.name = name;  
    }  
  };  
  console.log(emp.name);  
  /*console.log(Employee.name);  
  Error occurs on console:  
  "ReferenceError: Employee is not defined  
  */  