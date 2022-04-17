//JavaScript Array toString() Method
//The toString() method is used for converting and representing an array into string form. It returns the string containing the specified array elements. Commas separate these elements, and the string does not affect the original array.


//Example1: Converting a given array into string form seperated by commas.


var arr=['j','a','v','a','T','p','o','i','n','t']; //array elements  
var str=arr.toString(); //toString() method implementation  
console.log("After converting into string:  "+str); 



 //Example2: Converting an array 'season' into string form.


 var season1=["Spring","Autumn","Summer","Winter"];  
 var str1=season1.toString(); //toString() method implementation  
 console.log("After converting into string:  "+str1);  


//Example3: Converting an array containing numeric values into string.


 var arr2=["1","2","3","4"];  
 console.log(arr2.toString()); //After converting into string.




//Example5: Let's convert a pre-defined array into string through this example.


var arr4=[10,20,30,40]; //pre-defined array  
console.log("The array elements are:  "+arr4);  
pre_define_arr();
function pre_define_arr()  
{  
     var str4=arr4.toString();  
     console.log("After converting the array elements into string, it     becomes:  "+str4);  
}  