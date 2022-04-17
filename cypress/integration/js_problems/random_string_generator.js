function randomString() {  
    //define a variable consisting alphabets in small and capital letter  
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
      
    //specify the length for the new string  
var lenString = 7;  
var randomstringa = '';  

    //loop to select a new character in each iteration  
for (var i=0; i<lenString; i++) {  
var rnum = Math.floor(Math.random() * characters.length);  
randomstringa += characters.substring(rnum, rnum+1);  
console.log(randomstringa);  
}  

     //display the generated string   
let ab = randomstringa;
console.log(ab);  
}  