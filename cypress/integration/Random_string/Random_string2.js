function randomaString() {
    //initialize a variable having alpha-numeric characters
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    //specify the length for the new string to be generated
var string_length = 8;
var randomstring = '';

    //put a loop to select a character randomly in each iteration
for (var i=0; i<string_length; i++) {
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
}
     //display the generated string 
console.log(randomstring);
}

randomaString();