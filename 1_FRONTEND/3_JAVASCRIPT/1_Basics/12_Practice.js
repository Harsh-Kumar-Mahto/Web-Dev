// for given array of marks.Find average marks of entire class
let arr=[85,97,44,37,76,60];
let avg=0;
for(let el of arr)
{
    avg+=el;   //this is only giving the sum of all elements
}
console.log(avg);
avg/=arr.length;  //this is finally the average
console.log(avg);

// for array of 5 items,all items have an offer of 10%OFF on them.Change the array to store final price after offer
let price=[250,645,300,900,50];
console.log("New prices:");
let idx=0;
for(let i of price)
{
    console.log(`Value at index ${idx}: ${i}`);
    i=0.9*i;
    console.log(`Value at index ${idx} after discount : ${i}`);
    idx++;
}