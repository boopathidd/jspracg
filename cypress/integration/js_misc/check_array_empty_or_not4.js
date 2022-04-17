var arr1 = new Array('Happy', 'New', 'Year');
    
//check the first variable (arr1) type and empty 
if(Array.isArray(arr1)) {
   console.log("arr1 is an array");
   if (arr1.length == 0)
      console.log(" and it is empty <br>");
   else 
      console.log(" but it is not empty. <br>");
}
else
   console.log("arr1 is not an array. <br>");     