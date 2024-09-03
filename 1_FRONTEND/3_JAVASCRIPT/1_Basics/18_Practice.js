// Print largest number in an array
let arr=[5,6,2,1,101,3];
let and=arr.reduce((res,curr)=>{
    return res>curr?res:curr;
});
console.log(and);

// filter marks above 90
let marks=[97,64,32,49,99,96,86];
let filterMarks=marks.filter((val)=>{
    return val>90;
})
console.log(filterMarks);

// take input n and calculate sum and product of all
let n=prompt("Enter value of n");
let array=[];
for(let i=0;i<n;i++)
{
    array[i]=i+1;
}
console.log(array);

let sum=array.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(`Sum of ${n} natural numbers is ${sum}`);


let mul=array.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(`Product of ${n} natural numbers is ${mul}`);