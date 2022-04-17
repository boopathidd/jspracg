function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 3;
    {
      let x = 4;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }


  varTest();
  letTest(); 