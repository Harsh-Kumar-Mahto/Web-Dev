// Create a function that takes string as argument and return number of vowel in it
function vowels(str)
{
    let count=0;
    for(const x of str)
    {
        if(x=="a" ||x=="e" ||x=="i" ||x=="o" ||x=="u")
        {
            count++;
        }
    }
    return count;
}
let ans=vowels("Hello");
console.log(ans);

// Above question using arrow function
const countVowels=(str)=>{
    let count=0;
    for(const x of str)
    {
        if(x=="a" ||x=="e" ||x=="i" ||x=="o" ||x=="u")
        {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello"));