// Print all odd numbers from 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==!0)
    {
        console.log(i);
    }
}

// create a game where game start with a random number and user is kept on guessing until he gets to the correct value
let x=25;
let y=prompt("Guess a number");
while(y!=x)
{
    y=prompt("You guessed wrong.Guess again");
}
console.log("Congratulations!You guessed the right number;")