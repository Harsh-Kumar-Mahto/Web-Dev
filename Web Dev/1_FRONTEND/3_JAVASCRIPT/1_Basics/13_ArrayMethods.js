// Array methods
// 1.push():Add element at the end to the array.Changes the original array
let games=["GTA","Free Fire","BGMI"];
games.push("Clash Of Clans");
console.log(games);


// Simply writing the name of the array in the console(games) prints the whole array in the console


// 2.pop():Removes the last element from the array and return its value(we can either store it in a variable or if we do in console it shows the value of the popped element).Changes the original array
let deletedGame=games.pop();
console.log(`Deleted game name is "${deletedGame}"`);
console.log("New array after popping last element")
console.log(games);

// 3.toString():converts the the whole array into a string and it doesn't change the original string.
let foodItems=["potato","apple","litchi","tomato"];
console.log(foodItems);
console.log(foodItems.toString());  //Displays all the array items as a string with comma in between
console.log(foodItems);    //Original array is not changed

// 4.concat():joins multiple arrays and return a new array,original ones are not altered
let arr1=['a','b','c','d'];
console.log(`Array 1 : ${arr1}`);
let arr2=['e','f','g','h'];
console.log(`Array 2 : ${arr2}`);
let arr3=['i','j','k','l'];
console.log(`Array 2 : ${arr3}`);
let concatedArr=arr1.concat(arr2,arr3);   //Multiple arrays can be concatenated at once
console.log("Concated array:",concatedArr);

// 5.unshift():same as push,just adds the element in the beginning rather than ending.Updates the original array
let heroes=["Spider Man","Iron Man","Hulk"];
heroes.unshift("Krish");
console.log(heroes);

// 6.shift():same as pop,removes and returns the starting element in the original array
let shiftedhero=heroes.shift();
console.log("Deleted hero:",shiftedhero);
console.log(heroes);

// 7.slice(start,end):returns a new array from start to end where end is non inclusive(Same as strings).Original array is not changed
let alphabets=['a','b','c','d','e','f']
console.log(alphabets.slice(1,3));
console.log(alphabets);   //original string is same as before

// 8.splice(startIdx,delCount,newEl....):triple parameter method and it changes the original array.Can be used to delete,add or replace items(technically deleting and adding at same place is replacing)
let num=[1,2,3,4,5,6,7,8,9,0];
num.splice(1,2);     //deleting 2 elements from the index 1(2 &3) and adding nothing
console.log(num);    //original array is manipulated
num.splice(1,0,2,3)  //from the first index deleting nothing and adding 2 & 3
console.log(num);

// 9.map(callBackFunction):does the same work as forEach but in addition to it,this method forms a new array with the returned values of the callBack
// It can also have 3 parameters value,index,array
let nums=[67,52,39];
let newarr=nums.map(value=>{
    return value;
});
console.log(newarr);

// 10.filter:Creates a new array of elements that give true for a condition/filter
// example:all even elements

arr=[1,2,3,4,5,6,7,8,9]
let filterarr=arr.filter(val=>{
    return val%2==0;   //even number will be stored in the filtered array
});

console.log(filterarr);

// 11.reduce:performs some operations and reduce the array to a single value.It returns that single value
// it operates the previous result to the present element and save the new result in the same until the loop is traversed
arr=[1,2,3,4];
const sum=arr.reduce((res,curr)=>{
    return res+curr;
})

console.log(sum);