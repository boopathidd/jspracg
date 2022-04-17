//JavaScript Function bind() method
//The JavaScript Function bind() method is used to create a new function.
// When a function is called, it has its own this keyword set to the provided value, with a given sequence of arguments.



var website = {  
    name: "Javatpoint",  
    getName: function() {  
      return this.name;  
    }  
  }  
  var unboundGetName = website.getName;  
  var boundGetName = unboundGetName.bind(website);  
  console.log(boundGetName());  