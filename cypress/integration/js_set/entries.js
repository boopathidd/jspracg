//The JavaScript Set entries() method returns an object of new set iterator. This object contains an array of [value, value] for each element. It maintains an insertion order.

//Unlike Map, the Set object doesn't use key externally. To keep the values unique it uses the key internally. Thus, Set considers the value of element as a key. In array[value, value], the first value represents the key whereas the second value represents the value of element.

var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
var itr=set.entries();  
for(i=0;i<set.size;i++)  
  {  
 console.log(itr.next().value+"<br>");  
  }  
  





  //////
  var sets = new Set();  
sets.add("jQuery");  
sets.add("AngularJS");  
sets.add("Bootstrap");  
var itrs=sets.entries();  
for(let elements of itrs)  
  {  
 console.log(elements+"<br>");  
  } 