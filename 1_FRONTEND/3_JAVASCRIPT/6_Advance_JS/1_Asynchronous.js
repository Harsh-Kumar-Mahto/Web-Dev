// Synchronous:Below instructions are fast and take very less time so no problem in line by execution
console.log("one");
console.log("two");
console.log("three");

// Asynchronous:setTimeout will hold the code for declared milliseconds and it is useless to wait for that long therefore its proceeding code is executed and at the end when time completed,its output is shown
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("This will be printed after 4 seconds");
},4000);
console.log("three");
console.log("four");