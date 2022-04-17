function Emp(id,name) {  
    this.id = id;  
    this.name = name;  
  }  
  function PermanentEmp(id,name) {  
   Emp.call(this,id,name);  
  }  
  function TemporaryEmp(id,name) {  
   Emp.call(this,id,name);  
  }  
  var p_emp=new PermanentEmp(101,"John Martin");  
  var t_emp=new TemporaryEmp(201,"Duke William")  
  console.log(p_emp.id+" "+p_emp.name+"aaaa");  
  console.log(t_emp.id+" "+t_emp.name+"bbbb");  

