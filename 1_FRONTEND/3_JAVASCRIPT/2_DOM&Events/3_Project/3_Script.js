// Create h2 text and append a text to it using JS

let text=document.querySelector("h2");
console.dir(text.innerText);
text.innerText=text.innerText.concat(" By Apna College");
console.dir(text.innerText);

// Create 3 divs with common class name-"box".Acces and add unique text to each of them
let div=document.querySelectorAll(".box");
console.dir(div);
div[0].innerText="Hi!";
div[1].innerText="I Changed";
div[2].innerText="The Values";

// Another ways of changing all in similar way
let idx=0;
for(let i of div)
{
    i.innerText=`New unique text is ${idx+1}`;
    idx++;
}