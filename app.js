/*
plan:
interface: on console terminal
input: user selection of rock, paper, scissors 
output: return the result of comparing user's with computer's 

pseudo-code:
make a function return random one of three: rock, paper or scissors
get user selection, turn into lowercase
compare between two, return who wins, what beats what, increase winner score by one.
loop back to beginning, keep the scores.


*/
// VARIABLES
const rps = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
let playerSelection;
// EVENT LISTENER

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
});
// FUNCTION
function computerPlay() {
  /*input: 
  output: one random child in rps array */
  return rps[random(rps.length)];
}

function random(num) {
  // input: number
  // output random number in range [0, num)
  return Math.floor(Math.random() * num);
}

// calculate the result of a match
function playRound(playerSelection, computerSelection) {
  // input string, string
  // output string
  // compare selections of player to computer, return who wins
  // alert if user give invalid input
  const localStr = playerSelection.toLowerCase() + computerSelection;

  if (playerSelection.toLowerCase() === computerSelection) {
    return "Match tie";
  } else {
    switch (localStr) {
      case "paperscissors":
      case "rockpaper":
      case "scissorsrock":
        return `You lose! ${computerSelection} beats ${playerSelection}`;
        break;
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        return `You win! ${playerSelection} beats ${computerSelection}`;
        break;
      default:
        alert("invalid input");
        break;
    }
  }
}
function game() {
  // input:
  // output console.log
  // loop the game in 5 turns
  // save the score of each round, at the end, return who wins more round.
  let computerScore = 0;
  let playerScore = 0;

  const computerSelection = computerPlay();
  const playerSelection = prompt("Rock paper scissors:");
  const result = playRound(playerSelection, computerSelection).split(" ");
  if (result[1] === "win!") {
    playerScore++;
  } else if (result[1] === "lose!") {
    computerScore++;
  }
  console.log(result.join(" "));

  if (computerScore > playerScore) {
    console.log("Computer wins.Score " + computerScore + ":" + playerScore);
  } else if (playerScore > computerScore) {
    console.log("You win. Score" + playerScore + ":" + computerScore);
  } else {
    console.log("Match tie");
  }
}
