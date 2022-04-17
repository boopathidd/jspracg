//How to Convert Comma Separated String into an Array in JavaScript
// A comma-separated valuation (CSV) file is a demarcated file format that uses a comma to isolate the values. The data record is comprised of one or more than one field, separated by the commas. The name root for this file format is the comma-separated file format, is the use of the comma as a field extractor.

// You can convert the comma-separated string into an array by using the two following methods.

// By using the split () method
// Append through the list and put track of each comma you find to generate a new sequence with different strings.


// By using the split () method
// The split () method is used to partition a sequence based on an extractor. This separator can be delineated as a comma to differentiate the string if a comma is encountered. This procedure returns an array of distinct strings.


separateString();   
//console.log(separateString());
function separateString() {   
            originalString = "Twenty, Thirty, Fourty, Fifty, Sixty";   
            separatedArray = originalString.split(', ');     
  console.log(separatedArray);
} 