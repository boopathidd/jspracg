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
    console.log(getData());