//The JavaScript map forEach() method execute the specified function once for each key/value pair in the Map object.




var map = new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
console.log("Fetching values :"+"<br>");  
function display(values)   
{  
    console.log(values+"<br>");  
}  
map.forEach(display);  






//Let's see an example to fetch the values and keys from the Map object.


var maps = new Map();  
maps.set(1,"jQuery");  
maps.set(2,"AngularJS");  
maps.set(3,"Bootstrap");  
console.log("Fetching values and keys :"+"<br>");  
function display(values,key)   
{  
    console.log(values+" "+key+"<br>");  
}  
maps.forEach(display);  
