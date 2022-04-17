//The JavaScript map clear() method is used to remove all the elements from Map object.


//Here, we will understand clear() method through various examples.


var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
console.log("Size before invoking clear(): "+ map.size+"<br>");  
map.clear();  
console.log("Size after invoking clear(): "+map.size); 



//Let's see an example to determine whether the map object contains the specified element.


var maps=new Map();  
maps.set(1,"jQuery");  
maps.set(2,"AngularJS");  
maps.set(3,"Bootstrap");  
console.log("Element present before invoking clear(): "+ maps.has(2)+"<br>");  
maps.clear();  
console.log("Element present after invoking clear(): "+maps.has(2)); 