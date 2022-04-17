//The JavaScript Set forEach() method executes the specified function once for each value in the Set object. It maintains an insertion order.

//Unlike Map, the Set object doesn't use key externally. To keep the values unique it uses the key internally. Thus, Set considers the value of element as a key.



var set = new Set(["jQuery","AngularJS","Bootstrap"]);  
 console.log("Fetching values :"+"<br>");  
set.forEach(function display(value1,value2,set)   
{  
 console.log('key[' + value1 + '] = ' + value2+"<br>");  
})  




