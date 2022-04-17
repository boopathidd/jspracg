//The JavaScript Function call() method is used to call a function contains this value and an argument provided individually. 
//Unlike apply() method, it accepts the argument list.

function Emp(id,name) {  
    this.id = id;   
    this.name = name;  
  }  
  function PermanentEmp(id,name) {  
   Emp.call(this,id,name);  
  }  
//  document.writeln(new PermanentEmp(101,"John Martin").name);  
console.log(new PermanentEmp(101,"John Martin").name);