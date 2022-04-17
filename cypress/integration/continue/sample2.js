//In this example, we are using the continue statement in the while loop. Here, we are defining an array 'rainbow'. The iteration of the loop begins with 0 and ends at the length of the array. There is a conditional statement using the OR (||) operator, which checks when the iteration reaches to the values 'Magenta' and 'Skyblue". When it is reached to the appropriate values, the iteration is skipped due to the continue statement and moves to the next iteration.

var rainbow = ["Violet", "Indigo", "Magenta", "Blue", "Skyblue", "Green", "Yellow", "Orange", "Red"];  
var i = 0;  
var res = "";  
while(i < rainbow.length){  
  
  if (rainbow[i] == "Magenta" || rainbow[i] == "Skyblue") {  
    i++;  
    continue;  
  }  
  res = "";  
  res += rainbow[i] + "<br>";  
  i++;  
  console.log(res);  
}  