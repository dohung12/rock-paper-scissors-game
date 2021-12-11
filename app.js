const rps = ["rock", "paper", "scissors"];
function computerPlay() {
  return rps[random(rps.length)];
}

function random(num) {
  return Math.floor(Math.random() * num);
}

// calculate the result of a match
function playRound(playerSelection, computerSelection) {
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
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock paper scissors:");
    const result = playRound(playerSelection, computerSelection).split(" ");
    if (result[1] === "win!") {
      playerScore++;
    } else if (result[1] === "lose!") {
      computerScore++;
    }
    console.log(result.join(" "));
  }
  if (computerScore > playerScore) {
    console.log("Computer wins.Score " + computerScore + ":" + playerScore);
  } else if (playerScore > computerScore) {
    console.log("You win. Score" + playerScore + ":" + computerScore);
  } else {
    console.log("Match tie");
  }
}
