// forEach loops are used in arrays in which there is a callback function
// arr.forEach(callBackFunction)
// callBackFunction is a function that is passed as an argument to another function

// Heigher order function/method: Those functions which either have other functions as parameters or return any function are called HOF/HOM
// forEach is a HOM as the parameter passed in it is another function
// other array methods like filter,reduce and map in above file and there practice problems are below 

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val)  //value at each index
{
    console.log(val);
});

// it can be written as arrow function
arr.forEach((val)=>  //value at each index is traversed
{
    console.log(val);
});

// forEach can be used with 3 parameters:value,index and array itself
arr.forEach((val,idx,arr)=>  //value at each index is traversed
{
    console.log(val,idx,arr);  //all the three values will be printed
});

// Q. print square of each number of an array

let num=[2,3,4,5];
// num.forEach(element => {
//     console.log(element*element);
// });
// Same output as above
let nums=(element) => {
    console.log(element*element);
};
num.forEach(nums);