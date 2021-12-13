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
const btns = document.querySelectorAll(".btn");

const matchResult = document.querySelector(".match-result");
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
  if (playerSelection === computerSelection) {
    return "Match tie";
  } else {
    switch (playerSelection + computerSelection) {
      case "paperscissors":
      case "rockpaper":
      case "scissorsrock":
        return "lose";
        break;
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        return "win";
        break;
    }
  }
}
function game() {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);

  if (result === "win") {
    matchResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (result === "lose") {
    matchResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    matchResult.textContent = "Match tie";
  }
}
