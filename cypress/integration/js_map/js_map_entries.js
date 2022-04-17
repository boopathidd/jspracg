//The JavaScript map entries() method returns an object of new map iterator. This object contains the key-value pair for each element. It maintains insertion order.




var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
  
var itr=map.entries();  
console.log(itr.next().value+"<br>");  
console.log(itr.next().value+"<br>");  
console.log(itr.next().value);  




//ex2

var maps=new Map();  
maps.set(1,"jQuery");  
maps.set(2,"AngularJS");  
maps.set(3,"Bootstrap");  
var itrs=maps.entries();  
for(i=0;i<maps.size;i++)  
  {  
    console.log(itrs.next().value+"<br>");  
  }  
