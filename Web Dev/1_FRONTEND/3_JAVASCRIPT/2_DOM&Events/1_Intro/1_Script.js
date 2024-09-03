// alert("HI");
// This is actually window.alert("HI") but we don't need to write it as browser automatically understands it
console.log(window);  //this will show all the methods in object model

// writing window in below 2 is not necessary,we can only write document
console.log(window.document);  //this will show the html code with its link 
console.dir(document);  //this is bit different from log as it doesn't show the code but contains each and every detail of the including all the tags

console.log(document.body)  //this again will contain code in the body tag
console.dir(document.body)  //this will contain details of the body tag