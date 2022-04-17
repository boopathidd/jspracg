////Creating a constructor function

//Let's check whether we can create an instance of Abstract class or not.


function Vehicle()  
{  
    this.vehicleName= vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
  
}  
Vehicle.prototype.display=function()  
{  
    return this.vehicleName;  
}  
var vehicle=new Vehicle();  