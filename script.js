function getComputerChoice() {
  const possibleChoices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}
