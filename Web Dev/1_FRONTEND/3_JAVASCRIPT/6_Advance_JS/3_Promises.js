let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    // resolve("success");   //this will set state to fulfilled and result to success
    reject("fail");         //this will set state to rejected and result to fail and give an error with the result
})

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            // reject("Fail");
            if(getNextData)
            {
                getNextData();
            }
        },5000);
    });
}

// when we call the function getdata,it immediately returns a promise which is pending(5 sec in above case).After this time,the program is executed and promise is fulfilled
// in our case initially(let pr=getData(123)) request is pending,after 5 sec 123 is printed on console and promise is resolved and set to fulfilled with success.

let pr=getData(123);
pr.then((res)=>{              //in our case,this statement will be printed as soon as data is printed(5sec)
    console.log("Promise fulfilled:",res);
})
pr.catch((er)=>{
    console.log("Promise rejected:",er);
})

// res and er are basically results that we sent in the resolve's or reject's paranthesis