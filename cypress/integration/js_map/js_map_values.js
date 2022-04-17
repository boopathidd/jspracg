//The JavaScript map values() method returns an object of new Map iterator. This object contains the value for each element. It maintains insertion order.

var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
var itr=map.values();  
console.log(itr.next().value+"<br>");  
console.log(itr.next().value+"<br>");  
console.log(itr.next().value);  





////


var maps=new Map();  
maps.set(1,"jQuery");  
maps.set(2,"AngularJS");  
maps.set(3,"Bootstrap");  
var itrs=maps.values();  
for(i=0;i<maps.size;i++)  
  {  
    console.log(itrs.next().value+"<br>");  
  }  