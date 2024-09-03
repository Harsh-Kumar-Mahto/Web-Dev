// 1.Input a number and check if it is divisible by 5 or not

let x= prompt("Enter a number:");
if(x%5===0)
{
    console.log(x,"is divisible by 5");
}
else
{
    console.log(x+" is not divisible by 5");
}

// 2.Grades of students

let grade=prompt("Enter your score(0-100):");

if(grade>=90 && grade<=100)
{
    console.log("A");
}
else if(grade>=70 && grade<=89)
{
    console.log("B");
}
else if(grade>=60 && grade<=69)
{
    console.log("C");
}
else if(grade>=50 && grade<=59)
{
    console.log("D");
}
else if(grade>=0 && grade<=49)
{
    console.log("F");
}