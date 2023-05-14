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

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "it's a tie";
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `${playerChoice} beats ${computerChoice}! you won :D`;
  } else {
    return `${computerChoice} beats ${playerChoice}! you lost :(`;
  }
}

const score = document.querySelector(".score");
let playerScore = 0,
  computerScore = 0;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // append result of current round to my .results div
    const className = event.target.className.split(" ")[1];
    const result = playRound(className, getComputerChoice());
    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML += result + "<br>";

    // add a point to the winner
    if (result.includes("won")) playerScore++;
    else computerScore++;

    // render the new score
    score.innerHTML = playerScore + " - " + computerScore;

    // end game
    if (playerScore === 5) resultsDiv.innerHTML += "YOU WOOOON!!!";
    else if (computerScore === 5) resultsDiv.innerHTML += "YOU LOST :(";
  });
});
