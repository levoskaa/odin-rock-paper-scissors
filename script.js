const score = document.querySelector(".score");
const selectionBtns = document.querySelectorAll("[data-selection]");
const roundResult = document.querySelector(".round-result");
const finalResult = document.querySelector(".final-result");

const CHOICE = {
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors",
};
const ROUND_RESULT = {
  PLAYER_WON: "playerWon",
  COMPUTER_WON: "computerWon",
  TIE: "tie",
};

let playerWins = 0;
let computerWins = 0;

function play() {
  const playerSelection = CHOICE[this.dataset.selection.toUpperCase()];
  const computerSelection = getComputerSelection();
  const result = playRound(playerSelection, computerSelection);
  displayRoundResult(result, playerSelection, computerSelection);
  updateScore(result);
  displayScore(playerWins, computerWins);
  if (playerWins === 5 || computerWins === 5) {
    displayFinalResult();
  }
}

function getComputerSelection() {
  const possibleChoices = Object.values(CHOICE);
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ROUND_RESULT.TIE;
  }
  const hasPlayerWon =
    (playerSelection === CHOICE.ROCK &&
      computerSelection === CHOICE.SCISSORS) ||
    (playerSelection === CHOICE.PAPER && computerSelection === CHOICE.ROCK) ||
    (playerSelection === CHOICE.SCISSORS && computerSelection === CHOICE.PAPER);
  return hasPlayerWon ? ROUND_RESULT.PLAYER_WON : ROUND_RESULT.COMPUTER_WON;
}

function displayRoundResult(result, playerSelection, computerSelection) {
  let textResult;
  switch (result) {
    case ROUND_RESULT.PLAYER_WON:
      textResult = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case ROUND_RESULT.COMPUTER_WON:
      textResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      textResult = "Tie!";
  }
  roundResult.textContent = textResult;
}

function displayScore(playerWins, computerWins) {
  score.textContent = `${playerWins} - ${computerWins}`;
}

function displayFinalResult() {
  finalResult.textContent = playerWins === 5 ? "You won!!!" : "You lost!";
}

function updateScore(result) {
  if (result === ROUND_RESULT.PLAYER_WON) {
    playerWins++;
  } else if (result === ROUND_RESULT.COMPUTER_WON) {
    computerWins++;
  }
}

selectionBtns.forEach((btn) => btn.addEventListener("click", play));
