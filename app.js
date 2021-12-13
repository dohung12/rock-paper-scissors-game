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
  const btn = e.currentTarget;
  playerSelection = btn.dataset.id;
  btn.classList.add("isClick");
  btn.addEventListener("transitionend", () => {
    btn.classList.remove("isClick");
  });
  game();
}

function computerPlay() {
  computerChoiceDisplay.innerHTML = "";
  const rps = ["rock", "paper", "scissors"];
  function random(num) {
    // input: number
    // output random number in range [0, num)
    return Math.floor(Math.random() * num);
  }
  computerSelection = rps[random(rps.length)];
  let item = document.createElement("button");
  item.setAttribute("class", "btn computer-btn");

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
    playerScore++;
    matchResult.textContent = `You get 1 point!`;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "lose") {
    computerScore++;
    matchResult.textContent = `Computer get 1 point!`;
    computerScoreDisplay.textContent = computerScore;
  } else {
    matchResult.textContent = "Match tie";
  }

  if (computerScore >= 5) {
    declareWin("Computer");
  } else if (playerScore >= 5) {
    declareWin("Player");
  }
}

function declareWin(winner) {
  matchResult.textContent = `${winner} has won!`;
  playerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScore = 0;
  computerScoreDisplay.textContent = computerScore;
}
