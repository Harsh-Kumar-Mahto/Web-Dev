// This is a single line comment

/*
   This is a multi line comment
*/

// Operators:perform some operation on data
// 1.Arithmetic Operator: Addition(+),Subtraction(-),Multiplication(*),Division(/),Modulo(%),Exponential(**),Unary Operators{Increment(++),Decrement(--)}

let a=6;
let b=2;
console.log("a:",a,"& b:",b);  //multiple expression print
console.log("a+b:",a+b);  //addition
console.log("a-b:",a-b);  //subtraction
console.log("a*b:",a*b);  //multiplication
console.log("a/b:",a/b);  //division
console.log("a%b:",a%b);  //modulo
console.log("a^b:",a**b); //exponential
console.log("++a",++a);   //post increment
console.log("--a",--a);   //post decrement
console.log("a++",a++);   //pre increment
console.log("a--",a--);   //pre decrement

// 2.Assignment Operator: =,+=,-=,*=,%=,**=

a+=b;         //a=a+b
console.log(a);

a-=b;         //a=a-b
console.log(a);

a*=b;         //a=a*b
console.log(a);

a**=b;         //a=a**b
console.log(a);

a%=b;         //a=a%b
console.log(a);

// 3.Comparison Operator:Equal to(==),Not equal to(!=),Equal to & type(===),Not equal to & type(!==),Greater than(>),Less than(<),Less than equal to(<=),Greater than equal to(>=)

console.log(a==b);  //Equal to

console.log(a!=b);  //Not equal to

console.log(a>b);   //Greater than

console.log(a<b);   //Less than

console.log(a>=b);  //Greater than equal to

console.log(a<=b);  //Less than equal to

console.log(a===b); //Equal to & type

console.log(a!==b); //Not equal to & type

// In this case === is used
console.log(5=="5")   //this is true,if we only have number in string than it is converted to number and hence they are equal
console.log(5==="5")   //this is false

// 4.Logical Operators: AND(&&),OR(||),NOT(!)
// normal logical operators