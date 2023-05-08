const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function getPlayerChoice() {
  let playerIndex = prompt(
    "Choose 1 for Rock, 2 for Paper, or 3 for Scissors!!"
  );
  return options[playerIndex - 1];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "it's a tie";
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `${playerSelection} beats ${computerSelection}! you won :D`;
  } else {
    return `${computerSelection} beats ${playerSelection}! you lost :(`;
  }
}

function game() {
  let scores = {
    player: 0,
    computer: 0,
  };
  for (i = 1; i <= 5; ++i) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    if (outcome.includes("won")) scores.player++;
    else scores.computer++;
    console.log(`Round ${i}: ${outcome}`);
  }
  if (scores.player > scores.computer)
    console.log(
      `CONGRATULATIONS!!! YOU WON (${scores.player} - ${scores.computer})`
    );
  else {
    console.log(`YOU LOST (${scores.player} - ${scores.computer})`);
  }
}

game();
