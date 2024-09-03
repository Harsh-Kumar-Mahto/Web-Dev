// for loop

for(let i=1;i<=5;i++)
{
    console.log("Harsh");
}

// Calculate sum of first n numbers
// let x=prompt("Enter number");
let x=5;
let sum=0;
for(let i=1;i<=x;i++)
{
    sum+=i;
}
console.log("Sum of first",x,"numbers is:",sum);

// while loop

let i=1;
while(i<=5)
{
    console.log("Harsh");
    i++;
}

// do while

let y=1;
do{
    console.log("Harsh");
    y++;
}
while(y<=5);

// for-of loop:used in strings and arays.No initialization,updation or condition is required
let str="Harsh";
let size=0;
for(let i of str)    //i is the value at a particular position of string or array
{
    console.log(i);
    size++;
}
console.log("Size of the string is:",size);

// for-in loop:used for objects and arrays
const Student={
    name:"Harsh",
    age:19,
    branch:"CSE",
    sem:4,
};

for(let i in Student)   //i is the name of key in the object 
{
    console.log("Key:",i,"   Value at key:",Student[i]);   //Student["i"] double inverted comma not used as i is a variable and not a key itself
}