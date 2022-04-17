//The JavaScript map delete() method is used to remove all the elements from Map object.

var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
console.log("Size before invoking delete() method: "+ map.size+"<br>");  
map.delete(2); 

console.log("Size after invoking delete() method: "+map.size); 


//ex 2
//Let's see an example to determine whether the map object contains the specified element.



var maps=new Map();  
maps.set(1,"jQuery");  
maps.set(2,"AngularJS");  
maps.set(3,"Bootstrap");  
console.log("Element present before invoking delete() method: "+ maps.has(2)+"<br>");  
maps.delete(2);  
console.log("Element present after invoking delete() method: "+maps.has(2));  
