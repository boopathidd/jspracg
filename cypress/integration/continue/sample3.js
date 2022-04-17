//In this example, we are using a label with the continue statement. There is a nested for loop in which the outer loop is labeled as 'label1' and the inner loop is labeled as 'label2'.
var res = "";  
  var i, j;  
    
  label1:     // This loop is labeled as "label1"  
  for (i = 1; i <=5; i++) {  
  res += "<br>" + "i = " + i + ", j = ";  
    
    label2:    // This loop is labeled as "label2"  
    for (j = 1; j <= 4; j++) {  
      if (j == 2) {  
        continue label2;  
      }  
      let a = res += j + " ";
      console.log(a);  
    }  
  }  