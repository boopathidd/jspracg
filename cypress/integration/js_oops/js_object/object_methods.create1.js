//The Object.create() method is used to create a new object with the specified prototype object and properties. We can create an object without a prototype by Object.creates (null).

// prototype: It is the prototype object from which a new object has to be created.

// propertiesObject: It is an optional parameter. It specifies the enumerable properties to be added to the newly created object.

// Return
// Object.create() returns a new object with the specified prototype object and properties.

const people = {  
  printIntroduction: function ()  
   {  
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);  
  }  
};  
const me = Object.create(people);  
me.name = "Marry"; // "name" is a property set on "me", but not on "person"  
me.isHuman = true; // inherited properties can be overwritten  
me.printIntroduction();  

