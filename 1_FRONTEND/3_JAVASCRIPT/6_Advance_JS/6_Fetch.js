const URL="https://cat-fact.herokuapp.com/facts";   //this is a URL of an API

// fetch returns a promise and we pass the URL in the fetch.
let promise=fetch(URL);
console.log(promise);  //initially this will say pending but in some time it gets fulfilled

// to get the result after the promise is resolved or rejected we can use async await
const getFacts= async()=>{  //This function needs to be called in console
    console.log("Getting data...")
    let response=await fetch(URL);   //JSON format
    console.log(response);  //This we only execute when we get a response from the API
    let finalData=await response.json();
    console.log(finalData);    //result in the form of an array is returned here(5 elements we are getting here)
    console.log(finalData[0].text);   //we can access any of the array elements in text format

};