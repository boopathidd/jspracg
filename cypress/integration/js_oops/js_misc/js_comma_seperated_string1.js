//Append through the list and put track of each comma you find to generate a new sequence with different strings
//This method helps you to iterate the characters of the string and analyze for the comma. The Previous index variable can be determined, which keeps records of the first character of the next string. The slice method is used to remove the part of the string between the prior index and the specific position of the comma found. This string is driven to a new array. This procedure is iterated for the entire length of the string. The final segment comprises all the separate strings.

originalString = " Twenty, Thirty, Fourty, Fifty, Sixty ";   
separatedArray = [];   
let previousIndex = 0;                       // index of end of the last string   
   
for(i = 0; i < originalString.length; i++)   
{   
  if (originalString[i] == ', ') {                                      // check the character for a comma    
   
       // split the string from the last index to the comma   
        separated = originalString.slice(previousIndex, i);   
        separatedArray.push(separated);   
                                                                  
      previousIndex = i + 1;              // update the index of the last string   
    }   
}   
             // push the last string into the array   
separatedArray.push(originalString.slice(previousIndex, i));  
console.log(separatedArray);  
