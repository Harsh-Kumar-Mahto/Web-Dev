// Q.Creating a button with "Click me",red background and white text.
// Insert it as the first element in body

// Creation
let button=document.createElement("button");
button.innerText="Click Me";
button.style.backgroundColor="red";
button.style.color="white";
// Addition
document.querySelector("body").prepend(button);

// Q.Create a <p> tag in html,give it class and styling.
// then create a new class in CSS and try to append this class to <p> element.
// For this purpose we have to use classList as using setAttribute will replace the old class however we want both classes
let para=document.querySelector("p");
para.classList.add("newClass");  //similarly class can be removed from classList