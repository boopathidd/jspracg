
    function arr()  
    {  
           var name=['John','Serious','Hadrik','Harry'];  
            var itr=name.entries(); //Using entries() method.  
                     console.log("After applying the entries method:"+"<br>"); 


                     for(x of itr)  
        {  
       console.log("<br>"+x); //This will display one array                 element per line.   
        }  
    }  
    arr();