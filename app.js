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
