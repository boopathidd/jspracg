function position()  
{  
    var name=['John','Serious','Hadrik','Harry'];  
    var itr=name.entries(); //Using entries() method.  
    console.log("The positions of each candidate in a sequence are:  "+"<br>");  
    for(x of itr)  
    {  


        console.log("<br>"+x); //This will display one array element per line with its key.   
 
    }  
}  

//Displaying the position of the candidates in the given array.
position();