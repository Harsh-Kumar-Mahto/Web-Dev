// Prompt user to enter full name
// Generate username with @ followed by full name and ending with length of full name

let Name=prompt("Enter your full name without whitespaces");
let size=Name.length;
let username="@"+Name.concat(size);
console.log(username);