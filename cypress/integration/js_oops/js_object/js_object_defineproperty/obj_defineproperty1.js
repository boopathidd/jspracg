//The Object.defineProperty() method defines a new property directly on an object and returns the object. 
//To change the flags, we can use Object.defineProperty. We cannot change it back, because define property doesn?t work 
//on non-configurable properties.



//Parameter
//Obj: The Object on which to define the property.

//Prop: The name of a property to be defined or modified.

//Descriptor: The descriptor for the property being defined or modified.


//return:This method returns the object that was passed to the function.


const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: 22, } );  
  object1.property1;  
    // throws an error in strict mode  
console.log(object1.property1);  
