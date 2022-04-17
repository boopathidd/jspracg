//The JavaScript map keys() method returns an object of new Map iterator. This object contains the key for each element. It maintains insertion order.

var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
var itr=map.keys();  
console.log(itr.next().value+"<br>");  
console.log(itr.next().value+"<br>");  
console.log(itr.next().value); 



/////////////


var mapa=new Map();  
mapa.set(1,"jQuery");  
mapa.set(2,"AngularJS");  
mapa.set(3,"Bootstrap");  
var itr=mapa.keys();  
for(i=0;i<mapa.size;i++)  
  {  
    console.log(itr.next().value+"<br>");  
  } 

  var itrs=mapa.values();  
for(i=0;i<mapa.size;i++)  
  {  
    console.log(itrs.next().value+"<br>");  
  } 