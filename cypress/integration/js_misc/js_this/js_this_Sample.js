//The this keyword is a reference variable that refers to the current object. 
//Here, we will learn about this keyword with help of different examples.


var address=  
{  
company:"Javatpoint",  
city:"Noida",  
state:"UP",  
fullAddress:function()  
{  
return this.company+" "+this.city+" "+this.state;  
}  
};  
  
  
var fetch=address.fullAddress();  
console.log(fetch);  
  