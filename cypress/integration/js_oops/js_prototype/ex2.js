//Let's see an example to add a new property to the constructor function.


function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.company="Javatpoint"  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
console.log(employee1.firstName+" "+employee1.lastName+" "+employee1.company+"<br>");  
console.log(employee2.firstName+" "+employee2.lastName+" "+employee2.company);  
