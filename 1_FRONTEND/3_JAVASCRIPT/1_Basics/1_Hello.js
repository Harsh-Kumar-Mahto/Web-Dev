console.log("Hello world");    //console.log is used to print something and then moves to next line
console.log("My name is Harsh Kumar Mahto");

// Variables
// JS is a dynamically typed language unlike c,c++ etc as we need not to specify the data type to be stored in a variable.Any type of data can be stored in any variable
Name="Harsh Kumar Mahto";
console.log(Name);   //string data
age=19;
console.log(age);    //int data
x=null;    //we know the stored value which is null       
console.log(x);
y=undefined;  //we don't know about the value that is stored
console.log(y);

isFollow=false;       //bool data
console.log(isFollow);

// Variable rules:-
// 1.Case sensitive. 'a' and 'A' are different.
// 2.Only letter,digits,underscore and $ is allowed(not even space).
// 3.Digits can't be first character.
// 4.Reserved words can't be variable names


// We can also use some keywords to declare variables
// 1.var:Variables can be re-declared and updated.A global scope variable.Value can be left undeclared
// 2.let:Variable cannot be re-declared but can be updated.A block scope variable.Value can be left undeclared
// 3.const:Variable cannot be re-declared or updated.A block scope variable.Value declaration is must in the start

var age;
var age=24;
var age=59;
console.log(age);

let age2;
// let age2=12;    can't be done again
age2=69;
console.log(age2);

const PI=3.14;
// PI=3.141;  can't be done
console.log(PI);


// Block scope
{
    let a=5;
    // let a=10   not allowed
}
{
    let a=10;     //allowed as we are in another block
}

// Alert:it gives a one time pop up on the browser.
// Prompt:it also gives a pop up along with an option to input something