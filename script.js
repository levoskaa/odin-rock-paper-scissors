const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Enter your choice: rock, paper or scissors!'
    );
    const result = playRound(playerSelection, getComputerChoice());
    console.log(result);
  }
}

function getComputerChoice() {
  const possibleChoices = [ROCK, PAPER, SCISSORS];
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Convert to uppercase to check case-insensitively
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === computerSelection.toUpperCase()) {
    return 'Tie!';
  }

  let hasPlayerWon;
  switch (playerSelection) {
    case ROCK.toUpperCase():
      hasPlayerWon = computerSelection === SCISSORS;
      break;
    case PAPER.toUpperCase():
      hasPlayerWon = computerSelection === ROCK;
      break;
    case SCISSORS.toUpperCase():
      hasPlayerWon = computerSelection === PAPER;
      break;
  }

  playerSelection = capitalize(playerSelection.toLowerCase());
  return hasPlayerWon
    ? `You Win! ${playerSelection} beats ${computerSelection}`
    : `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

game();
