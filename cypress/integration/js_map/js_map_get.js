//The JavaScript map get() method returns the value of specified key of an element from a Map object.


var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
  
console.log(map.get(1)+"<br>");  
console.log(map.get(2)+"<br>"); 
 console.log(map.get(3));
 
 
 //Let's see an example to determine the result when map object doesn?t contain the specified key element.

var maps=new Map();  
maps.set(1,"jQuery");  
maps.set(2,"AngularJS");  
maps.set(3,"Bootstrap");  
console.log(maps.get(5)); //returns undefined  


