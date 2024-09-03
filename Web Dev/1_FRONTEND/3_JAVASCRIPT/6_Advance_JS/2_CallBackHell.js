function sum(a,b){
    console.log(a+b);
}
// Normal callback funtion(Synchronous)
function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}

calculator(2,4,sum);   //sum funtion is passed as a callback funtion to the calculator

// Asynchronous callback
setTimeout(()=>{
    console.log("Hello");
},1000);

// CallBack Hell:Demonstrated below after the comments
// This is callback hell as it is very difficult to understand and is very bad

function getData(dataId,nextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(nextData)
        nextData();
    },2000);
}

// getData("123");  This will not form a hell as all of them will start timer almost together and run simultaneously
// getData("456");  But to form a hell we need that our code needs to wait for 1st output then move to next one

getData(1,()=>{      //nextData is getting passed as a callback function each time
    getData(2,()=>{
        getData(3);
    })
})
