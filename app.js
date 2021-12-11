const rps = ["rock", "paper", "scissors"];
function computerPlay() {
  return rps[random(rps.length)];
}

function random(num) {
  return Math.floor(Math.random() * num);
}

function singleRound(playerSelection, computerSelection) {
  function roundReturn(roundResult) {
    console.log("a");
    if (roundResult === "win") {
      return `You ${roundResult}! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You ${roundResult}! ${computerSelection} beats  ${playerSelection}`;
    }
  }
  const pS = playerSelection.toLowerCase();
  if (computerSelection === "rock") {
    if (pS === "paper") {
      roundReturn("win");
    } else if (pS === "scissors") {
      roundReturn("lose");
    }
  } else if (computerSelection === "paper") {
    if (pS === "scissors") {
      roundReturn("win");
    } else if (pS === "rock") {
      roundReturn("lose");
    }
  } else if (computerSelection === "scissors") {
    if (pS === "rock") {
      roundReturn("win");
    } else if (pS === "paper") {
      roundReturn("lose");
    }
  }
}
