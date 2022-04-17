
//The let statement declares a block-scoped local variable, optionally initializing it to a value.

//let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).

//Just like const the let does not create properties of the window object when declared globally (in the top-most scope).

//An explanation of why the name "let" was chosen can be found

// although in JavaScript let creates block scope local variable instead.
//let allow to intialize only local

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1