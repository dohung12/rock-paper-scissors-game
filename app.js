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
const rockBtn = document.querySelector(".rock-btn");
const btns = document.querySelectorAll(".btn");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

const computerChoiceDisplay = document.querySelector(".computer-choice");

let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
// EVENT LISTENER
btns.forEach((btn) => btn.addEventListener("click", setPlayerSelection));
// FUNCTION

function setPlayerSelection(e) {
  playerSelection = e.currentTarget.dataset.id;
  game();
}

function computerPlay() {
  computerChoiceDisplay.innerHTML = "<h2>Computer's choice</h2>";
  const rps = ["rock", "paper", "scissors"];
  function random(num) {
    // input: number
    // output random number in range [0, num)
    return Math.floor(Math.random() * num);
  }
  computerSelection = rps[random(rps.length)];
  let item = document.createElement("button");
  let icon = document.createElement("i");
  icon.setAttribute("class", `fas fa-hand-${computerSelection}`);
  item.appendChild(icon);
  computerChoiceDisplay.appendChild(item);
  return computerSelection;
}

// calculate the result of a match
function playRound(playerSelection, computerSelection) {
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

  const computerSelection = computerPlay();
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
