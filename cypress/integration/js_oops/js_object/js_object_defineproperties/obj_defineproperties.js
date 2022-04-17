//The Object.defineProperties() method defines new or modifies existing properties directly on an object,
// ---and returning the object.


// Parameter
// Obj: The object on which to define or modify properties.

// Props: An object whose own enumerable properties constitute descriptors for the properties to be defined or modified.

// Return:
// This method reruns an object that was passed to the function.

const object1 = {};  
Object.defineProperties(object1, {  
  property1:{  
value: 44, }  
 });  
console.log(object1.property1);  