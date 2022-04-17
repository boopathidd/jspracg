// str: The specified string
// searchString: The characters are specified which are to be searched in the str.
// position: An optional parameter that holds the position in the string from where to begin the searching. By default, the value is 0.



const test = 'Work is Worship';  
console.log(test.startsWith('Work'));  
console.log(test.startsWith('Worship',8));  
console.log(test.startsWith('work'));




function testa() {   
    var str = 'Work is Worship';   
    var x = str.startsWith('Wor');    
    console.log(x);   
}   
testa();  