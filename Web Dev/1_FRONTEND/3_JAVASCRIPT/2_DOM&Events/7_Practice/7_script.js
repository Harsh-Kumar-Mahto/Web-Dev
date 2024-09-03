// Q.Create a toggle button that changes screen to dark-mode when clicked and light-mode when clicked again
let button=document.querySelector("button");
let curr="light";

button.addEventListener("click",()=>{
    if(curr==="light")
    {
        document.querySelector("body").style.backgroundColor="black";
        curr="dark";
    }else{
        document.querySelector("body").style.backgroundColor="white";
        curr="light";
    }
})

// Another way using css(Toggle button 2):Prefered to use one at a time otherwise after once use there is ambiguity
let button2=document.querySelector(".button2");
let body=document.querySelector("body");
button2.addEventListener("click",()=>{
    if(curr==="light")
    {
        body.classList.add("dark");
        body.classList.remove("light");
        curr="dark";
    }else{
        body.classList.add("light");
        body.classList.remove("dark");
        curr="light";
    }
})