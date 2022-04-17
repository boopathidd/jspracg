//The indexOf () method and push () method can be used together in order to remove duplicate elements from the array and fetch out all the unqiue elements from it.

//Below is an example code that will help you understand the working of indexOf () method with push () method:



var array = ["red","yellow","blue","black","blue"];  
    function duplicates(new_array){  
        var collect = [];  
        for(i=0; i < new_array.length; i++){  
            if(collect.indexOf(new_array[i]) === -1) {  
                collect.push(new_array[i]);  
            }  
        }  
        return collect;  
    }  
  console.log(duplicates(array));  