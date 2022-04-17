// Defining method in JavaScript Object
// We can define method in JavaScript object. But before defining method, we need to add property in the 
//function with same name as method.

// The example of defining method in object is given below.

function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
  
this.changeSalary=changeSalary;  


function changeSalary(otherSalary){  
this.salary=otherSalary;  
}  
}  
e=new emp(103,"Sonoo Jaiswal",30000);  
console.log(e.id+" "+e.name+" "+e.salary);  
e.changeSalary(45000);  
console.log("<br>"+e.id+" "+e.name+" "+e.salary);  
