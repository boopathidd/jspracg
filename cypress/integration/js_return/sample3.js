//Returning multiple values using object
//In this example, we are returning multiple values by using the Object. Here, we are using the ES6 Object 
//destructuring syntax to unpack the values of the object.


function getData() {  
    let fname = 'John',  
    lname = 'Rickman',  
    age = '25',  
    occupation = 'Private Employee';  
      
    return {  
    fname,  
    lname,  
    age,  
    occupation  
    };  
    }  
    let {fname, lname, age, occupation} = getData();  
    console.log("Name = " + fname + " " + lname + "<br>");  
    console.log("Age = " + age + "<br>");  
    console.log("Occupation = " + occupation);  