Object.values = function(object) {  
    var values = [];  
    for(var property in object) {  
      values.push(object[property]);  
    }  
    return values;  
  }  
  var foo = {a:1, b:2, c:3};  
  console.log(Object.values(foo)); 