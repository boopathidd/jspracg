//The JavaScript map set() method is used to add or updates an element to map object with the particular key-value pair. Each value must have a unique key.

var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
console.log(map.get(1)+"<br>");  
console.log(map.get(2)+"<br>");  
console.log(map.get(3)); 




///////


var mapa=new Map();  
mapa.set(1,"jQuery");  
mapa.set(1,"AngularJS");  
mapa.set(3,"Bootstrap");  
console.log(mapa.get(1)+"<br>");  
console.log(mapa.get(2)+"<br>");  
console.log(mapa.get(3)); 