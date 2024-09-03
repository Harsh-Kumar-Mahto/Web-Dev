// This is a normal function
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
        resolve(200);        //200 is used as an indicator of success
        },2000);
    });
}

// To use await, we first need to convert the function into an async funtion
async function getWeatherData(){
    await api();  //1st then after 2 sec
    await api();  //2nd and at last after 2 sec
    await api();  //3rd without using .then
}
// Call function in console to view results


// Previous example using async await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("Success");
        },2000);
    })
}

// Async Await
// async function fetchData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// Call function in console to view results

// Here we have to call function inspite of the fact we need to run it
// for this,IIFE is used
// IIFE stand for Immediately Invoked Function Expression,it is a function without any name that is called immediately as soon as it is defined
// These functions can only be used once(demerit).
// (function)();  This is the syntax for IIFE,it will automatically execute the function


//This functio will run automatically without any call
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();