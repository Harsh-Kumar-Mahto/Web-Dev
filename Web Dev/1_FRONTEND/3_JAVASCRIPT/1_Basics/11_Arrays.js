// Arrays are linear collection of similar data.It is also considered as array type
// In JS we can store diffferent data in singlr array however we don't prefer it

let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);  //length of array
console.log(typeof marks);  //object

console.log(marks[3]);   //64
marks[3]=66;             //value at indices can be changed like this(they are mutable) unlike strings(which are immutable)
console.log(marks[3]);   //66

// Looping over an array
// printing all elements of an array

console.log("Elements of array");
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}

// another way
console.log("Elements of array");
for(let el of marks)
{
    console.log(el);
}