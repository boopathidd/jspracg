//Let's see one more example to display the year value from the given date.

class Moment extends Date {  
  constructor(year) {  
    super(year);  
  }}  
var m=new Moment("August 15, 1947 20:22:10");  
console.log("Year value:")  
console.log(m.getFullYear());  