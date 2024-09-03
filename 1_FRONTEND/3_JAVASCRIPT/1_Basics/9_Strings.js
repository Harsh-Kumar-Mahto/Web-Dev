let str1="String";   //Creating a string
let str2='Harsh';   //Creating a string
console.log(str1.length);  //length of the string
console.log(str1[0]);   //individual characters as specific position
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
console.log(str1[4]);
console.log(str1[5]);

// Template literals
let obj={
    item:"pen",
    price:10,
};

console.log("The cost of",obj.item,"is",obj.price,"rupees");
// This type of repetitive values and strings can be replaced be a single expression(string) with the help of template literals
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
// The substitutes written inside the $ block are known as placeholders and this method is called string interpolation
// Value of placeholders are calculated at the runtime
console.log(output);

// Escape characters:  '\n'  used to move to next line , '\t'  gives a tab space in between
// Inspite of two characters in it(\ and n or t),its contibution in size is only 1
console.log("Hello\nHow are you");
console.log("Hello\tHow are you");

// String methods/functions:Built in functions to manipulate a string
// These methods do not change the actual value of the string but return a manipulated duplicate of it
// This is because strings in javascript are immutable:every time a string is manipulated,the result is in the form of a new string
// 1. str.toUpperCase():each character is converted to upper case  
// 2.str.toLowerCase():each character is converted to lower case   
// 3.str.trim():remove whitespaces in the beginning and the ends(not inbetween whitespaces)
// 4.str.slice(start,end):return the part of string between start and end(end character is non inclusive i.e it is not included in returned string)
// 5.str1.concat(str2):join str1 and str2
// 6.str.charAt(idx):character at a particular index
// 7.str.replace(searchVal,newVal):replace searchVal by newVal inside a string

// 1
str1="Hello";
console.log(str1.toUpperCase());  //string in upper case will be printed
let newstr=str1.toUpperCase();
console.log(str1);  //original string is printed
console.log(newstr); //this is the manipulated string

// 2
newstr=newstr.toLowerCase();  //result is stored in the original string
console.log(newstr);

// 3
let str="    Harsh Kumar Mahto     ";
console.log(str);
console.log(str.trim());  //Harsh Kumar Mahto will be the output

// 4
str="0123456789"
console.log(str.slice(0,4));  //here 4 will not be included
console.log(str.slice(5));  //also end is optional,if we only give the start it will automatically slice from start till end last of the string

// 5
str1="Who are";
str2=" you";
console.log(str1.concat(str2)); //both the strings will be concatenated 

// 6
console.log(str.charAt(3));

// 7
str="Glass";  //replacement only takes place one time if i want to replace s by a it will be "Glaas" and not "Glaaa"
// For that replaceAll must be used
str[1]="r";  //This will not change the value at 1st index again the same reason,strings in JS are immutable
console.log(str.replace("l","r"));