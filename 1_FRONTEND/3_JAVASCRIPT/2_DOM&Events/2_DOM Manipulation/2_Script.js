// Selecting by id
// document.getElementById("heading");  //This will return a value related to that id 
let head=document.getElementById("heading1");
console.dir(head);

// Selecting by class
let headings=document.getElementsByClassName("heading");   //This will return a html collection as there can be more than one element with same class
console.dir(headings);

// Selecting by tag
let paras=document.getElementsByTagName("p"); //This will return a html collection as there can be more than one element with same tag
console.dir(paras);

// Query Selector
let q=document.querySelector(".heading");   //Only first element is returned(.necessary for class and # for id)
console.dir(q);

let query=document.querySelectorAll("p");   //A node list will be returned(./# not used as it is a tag)
console.dir(query);



// Properties
let div=document.querySelector("div");

// 1.tagName:prints the tagname in the console
// div.tagName in console returns DIV as the tagName


// 2.innerText:prints everything inside the element without name of tags.It used \n to indicate line changes
// div.innerText in console will give the output
// We can also change value dynamically by simple writting div.innerText="  " and the content will be changed

// 3.innerHTML:prints everything inside the element with name of tags.
// div.innerHTML in console will give the output
// We can also change value dynamically by simple writting div.innerHTML="  " and the content will be changed

// 4.textContent:this can be used to return textual content even for hidden elements
// .log will print the line of the tag even text is hidden
// but when we try to get its innerText it will return an empty string.Therefore textContent is used