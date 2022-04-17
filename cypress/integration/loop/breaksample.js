function testBreak() {
    var i = 0;
  
    while (i < 6) {
      if (i == 3) {
          console.log("match" +i);
        break;
      }
      i += 1;
    }
  
    return ;
  }

  testBreak();