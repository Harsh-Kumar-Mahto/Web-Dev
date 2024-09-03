// 1.If statement

let age=56;
if(age>=18)
{
    console.log("You can vote");
}
if(age<18)
{
    console.log("You can not vote");
}

// 2.If else statement

let mode="dark";
let color;
if(mode=="dark")
{
    color="black";
}
else
{
    color="white";
}
console.log(color);

// 3.Else-if statement

age=27;
if(age<18)
{
    console.log("Junior");
}
else if(age<60)
{
    console.log("Young");
}
else
{
    console.log("Senior");
}

// 4.Ternary Operator:Another form of if else statement

age=25;
age>18?console.log("Adult"):console.log("Not adult");

// 5.Switch case:Not much used