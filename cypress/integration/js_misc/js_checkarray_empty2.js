var arr1 = [];
var arr2 = "notAnArray";

//check the first variable (arr1) type and empty 
if(Array.isArray(arr1) == true){
   console.log("arr1 is an array");
   if (arr1.length <= 0)
      console.log(" and it is empty <br>");
   else 
      console.log(" and it is not empty. <br>");
}
else
   console.log("arr1 is not an array. <br>");
   
//check the second variable (arr2) type and empty 
if(Array.isArray(arr2) == true){
   console.log("arr2 is an array");
   if (arr2.length <= 0)
      console.log(" and it is empty as well. <br>");
   else 
      console.log(" and it is not empty. <br>");
}
else
   console.log("arr2 is not an array. <br>");
   