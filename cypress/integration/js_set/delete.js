//The JavaScript Set delete() method is used to remove all the elements from Set object.


var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
 console.log("Size before invoking delete() method: "+ set.size+"<br>");  
set.delete("Bootstrap");  
 console.log("Size after invoking delete() method: "+set.size);  



//////////////

var sets = new Set();  
sets.add("jQuery");  
sets.add("AngularJS");  
sets.add("Bootstrap");  
 console.log("Element present before invoking delete() method: "+ sets.has("Bootstrap")+"<br>");  
sets.delete("Bootstrap");  
 console.log("Element present after invoking delete() method: "+sets.has("Bootstrap"));  