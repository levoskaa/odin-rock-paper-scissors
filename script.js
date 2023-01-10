const CHOICE = {
  ROCK: 'Rock',
  PAPER: 'Paper',
  SCISSORS: 'Scissors',
};
const ROUND_RESULT = {
  PLAYER_WON: 'playerWon',
  COMPUTER_WON: 'computerWon',
  TIE: 'tie',
};

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Enter your choice: rock, paper or scissors!'
    );
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    logRoundResult(
      result,
      capitalize(playerSelection.toLowerCase()),
      computerSelection
    );
    if (result === ROUND_RESULT.PLAYER_WON) {
      playerWins++;
    } else if (result === ROUND_RESULT.COMPUTER_WON) {
      computerWins++;
    }
  }

  logFinalResult(playerWins, computerWins);
}

function getComputerChoice() {
  const possibleChoices = Object.values(CHOICE);
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Convert to uppercase to check case-insensitively
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === computerSelection.toUpperCase()) {
    return ROUND_RESULT.TIE;
  }
  const hasPlayerWon =
    (playerSelection === CHOICE.ROCK.toUpperCase() &&
      computerSelection === CHOICE.SCISSORS) ||
    (playerSelection === CHOICE.PAPER.toUpperCase() &&
      computerSelection === CHOICE.ROCK) ||
    (playerSelection === CHOICE.SCISSORS.toUpperCase() &&
      computerSelection === CHOICE.PAPER);
  return hasPlayerWon ? ROUND_RESULT.PLAYER_WON : ROUND_RESULT.COMPUTER_WON;
}

function logRoundResult(result, playerSelection, computerSelection) {
  let textResult;
  switch (result) {
    case ROUND_RESULT.PLAYER_WON:
      textResult = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case ROUND_RESULT.COMPUTER_WON:
      textResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      textResult = 'Tie!';
  }
  console.log(textResult);
}

function logFinalResult(playerWins, computerWins) {
  console.log(`Final result - You: ${playerWins}\tComputer: ${computerWins}`);
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

game();
