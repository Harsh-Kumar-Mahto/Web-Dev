// Functions are block of code that perform a specific task,can be invoked whenever needed

function myFunction()   //function definition
{
    console.log("Welcome");
    console.log("I am learning JS");
}

myFunction();       //function call/invoke

function parameters(msg)   //parameterized function
{                          //function parameters are local variables and has block scope
    console.log(msg);
}

parameters("Hi I am Harsh Kumar Mahto");  //function call with arguments

//functions can be stored in variables(Arrow function)

let func=(a,b)=>{
    console.log(a+b);
};

// (a,b)=>{console.log(a+b);};    this is the arrow function which is stored in func 

console.log(func);      //this will give the definition of the funtion
console.log(func(2,3)); //this will actually execute the function

const printHello =()=>{
    console.log("hello");
}

console.log(printHello);   //this will print the arrow function which is stored in the printHello
printHello();              //due to paranthesis,this function will actually get executed