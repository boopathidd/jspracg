//The JavaScript Set clear() method is used to remove all the elements from Set object.


var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
 console.log("Size before invoking clear() method: "+ set.size+"<br>");  
set.clear();  
 console.log("Size after invoking clear() method: "+set.size);  




var sets = new Set();  
sets.add("jQuery");  
sets.add("AngularJS");  
sets.add("Bootstrap");  
 console.log("Element present before invoking clear() method: "+ sets.has("Bootstrap")+"<br>");  
sets.clear();  
 console.log("Element present after invoking clear() method: "+sets.has("Bootstrap"));  