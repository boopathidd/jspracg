function getData() {  
    let fname = 'John',  
    lname = 'Rickman',  
    age = '25',  
    occupation = 'Private Employee';  
      
    return [fname, lname, age, occupation];  
    }  
    const [fname, lname, age, occupation] = getData();  
      
    console.log("Name = " + fname + " " + lname + "<br>");  
    console.log("Age = " + age + "<br>");  
    console.log("Occupation = " + occupation);  

//    In this example, we are returning multiple values by using the Array. Here, we are using the ES6 Array destructuring syntax to unpack the values of array.