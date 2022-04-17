//JavaScript extends Example: a Prototype-based approach
//Here, we perform prototype-based inheritance. In this approach, there is no need to use class and extends keywords.

//Constructor function  

//BASE
function Bike(company)  
{  
    this.company=company;   
}  
  
Bike.prototype.getCompany=function()  
{  
  return this.company;  
}  
//Another constructor function  
//CHILD
function Vehicle(name,price) {  
 this.name=name;  
  this.price=price;  
  this.company="comp";  
  }   
var bike = new Bike("Honda");  
Vehicle.prototype=bike; //Now Bike treats as a parent of Vehicle.  
var vehicle=new Vehicle("Shine",70000);  
console.log(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);  

