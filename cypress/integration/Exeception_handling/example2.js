try {
    throw new Error('This is the throw keyword'); //user-defined throw statement.
 }
 catch (e) {
     console.log(e.message);
 }