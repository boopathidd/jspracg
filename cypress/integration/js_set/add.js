
//The JavaScript Set add() method is used to add an element to Set object with a specified value. Each element must have a unique value.



var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
for (let elements of set) {  
 console.log(elements+"<br>");  
}  


//
var sets = new Set();  
sets.add("jQuery").add("AngularJS").add("Bootstrap");  
for (let elements of set) {  
    console.log(elements+"<br>");  
}  