//The JavaScript Set values() method returns an object of new Set iterator. This object contains the value for each element. It maintains an insertion order.



var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
var itr=set.values();  
 console.log(itr.next().value+"<br>");  
 console.log(itr.next().value+"<br>");  
 console.log(itr.next().value);



var sets = new Set();  
sets.add("jQuery");  
sets.add("AngularJS");  
sets.add("Bootstrap");  
var itrs=sets.values();  
for(i=0;i<sets.size;i++)  
  {  
 console.log(itrs.next().value+"<br>");  
  } 