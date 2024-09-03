function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);  //when first data will be received then second data will be requested
//     getData(2).then(res=>{
//         console.log(res);
//     });
// })

// More correctly,the above part is written as
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
});