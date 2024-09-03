// getAttributes to check the value of attributes
let div=document.querySelector("div");
console.log(div);

let ID=div.getAttribute("id");
console.log(ID);

let Name=div.getAttribute("name");
console.log(Name);

// setAttribute to change value of attributes
div.setAttribute("id","identity");
console.log(div.getAttribute("id"));  //id is changed from ID to identity

// node.style:gives the styling(css) of any element
let st=document.querySelector("#box");
st.style.backgroundColor="red";
console.log(st.style);
st.style.color="white";

// Insert element:first we have to create the element than we add it to the web

//1.Creation is done with the help of createElement as below 
let button=document.createElement("button");
button.innerText="Click Me";

// 2.Adding:We have to select a reference node than we have 4 options to append
// (a)node.append(el):adds element at end of node(inside)
// (b)node.prepend(el):adds element at start of node(inside)
// (c)node.before(el):adds element before node(outside)
// (d)node.after(el):adds element after node(outside)

let box=document.querySelector("#box");
box.after(button);   //any of the above 4 can be used as per requirement

let heading=document.createElement("h1");
heading.innerText="This one is for get/set attribute,style and creation & deletion of nodes";
div.prepend(heading);   //div is the first HI div so we used it as reference

// Deletion(node.remove()):removing any node
// Here we are deleting the above heading so taking reference
heading.remove();
button.remove();