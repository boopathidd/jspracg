// Convert object to array in Javascript
// Javascript, being a broad and varied-natured programming language consists of an ample amount of features to convert an object into an array. These methods are predefined in the language itself. Let's look at the different ways of converting objects to arrays in javascript.

// To convert an object into an array in Javascript, you can use different types of methods. Some of the methods are Object.keys(), Object.values(),and Object.entries().

// Consider the below examples to understand the above methods.



//Method 1: Object.keys()

const animal = {  
    first: 'The',  
    last: 'Lion'  
};  
const propertyNames=Object.keys(animal);  
console.log(propertyNames); 


//Method 2: Object.values()

const animals = {  
    first: 'The',  
    last: 'Lion'  
};  
const propertyValues=Object.values(animals);  
console.log(propertyValues);  






//Method 3: Object.entries()

const animalss = {  
    first: 'The',  
    last: 'Lion'  
};  
const entriesp=Object.entries(animalss);  
console.log(entriesp); 





//sample
var superHeroes = {'Captain America':1,'Thor':8,'Iron Man':null};  
  
//convert object keys to array  
var k = Object.keys(superHeroes);  
console.log(k); 

//convert object values to array  
var v = Object.values(superHeroes);  
console.log(v); 
