/* getComputerChoice will randomly return Rock, Paper, or Scissor
    will take 2 parameteres, playerSelection and computerSelection, and return a string to determine winner
        make functions playerSelection case-INSENSITIVE (so can use rock, Rock, and ROCK)
            RETURN the results of the function call, DO NOT CONSOLE.LOG
        make NEW function called game()
            call the playRound function INSIDE of this one to play a 5 ROUND GAME that keeps score and reports winner and loser at end
                (use loops here!!)
                  console.log results at end of each round to declare winner
                    use prompt() to get user input  
    rock beats scissors, scissors beats paper, paper beats rock
*/ 
/* 
when user inputs variable
randomly generate second variable
equate variable to number 0-2
if  input is "Rock" and "Scissor" return "Rock Wins"
if input is "Scissor" and "Paper" return "Scissor Wins"
if "Paper" and "Rock" return "Paper Wins"
repeat 5 times and print results
*/
let playerChoice = 0;
let computerChoice = 0;


//when user inputs variable//
let playerSelection = prompt("Choose Rock, Paper, or Scissors!");
//randomly generate second variable//
let input = ['Rock', 'Paper', 'Scissors'];
let computerSelection = input[Math.floor(Math.random() * input.length)];
//equate variable to number 0-2//
if (playerSelection.toLowerCase() === "rock") {
    playerChoice === 0;
}