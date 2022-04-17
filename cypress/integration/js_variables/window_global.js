var window.iamGlobal = "some val"; //Global variable declaration with window.
 
//Any place in other part of code
 
function doSomething()
{
    alert(window.iAmGlobal); //I am accessible here too !!
    //OR
    alert(iAmGlobal); //I am accessible here too !!
}