// To handle event here,simple write node on which event has to be handled.name of event=()=>{}
// node.event=()=>{handle here}

let div=document.querySelector("#event");
div.onclick=()=>{
    console.log("Clicked on box");
}


// Event Object of above event:e is the event object here,any variable can be used
div.onclick=(e)=>{
    console.log(e);
    console.log(e.type);    //click
    console.log(e.target);  //second div box is target
    console.log(e.clientX,e.clientY);  //x and y positioning
    // Many more methods of the event are there
}


// Event listener
// node.addEventListener("event.type",callback function)
let box1=document.querySelector("#box1");
box1.addEventListener("click",()=>{
    console.log("Clicked box1");
})
box1.addEventListener("click",(e)=>{
    console.log("Clicked box1-listener2");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
})

// Remove eventListener
// let us add one more listener and then will remove it
let callbackFunc=()=>{
    console.log("Listener 3");
}

box1.addEventListener("click",callbackFunc);
// if we comment below statement,new handler will also be printed
box1.removeEventListener("click",callbackFunc);