// Helper variables
const players = [
  { name: '', symbol: 'X' },
  { name: '', symbol: 'O' },
];
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editedPlayer = 0; // Saved with 1 or 2 values
let activePlayer = 0; // Saved with 0 or 1 values
let currentRound = 1;
let gameIsOver = false;

// Modal overlay and backdrop
const playerConfigOverlayElement = document.querySelector('#config-overlay');
const backdropElement = document.getElementById('backdrop');
const overlayPlayerNameInputElement = document.querySelector('#playername');
const formElement = document.querySelector('#config-overlay form');
const errorsOutputElement = document.querySelector('#config-error');

// Active game area
const gameAreaElement = document.querySelector('#active-game');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.querySelector('#game-board');
const activePlayerNameElement = document.querySelector('#active-player-name');
const gameOverElement = document.querySelector('#game-over');

// Buttons
const player1EditButtonElement = document.querySelector('#edit-player-1-btn');
const player2EditButtonElement = document.querySelector('#edit-player-2-btn');
const cancelConfigButtonElement = document.querySelector('#cancel-config-btn');
const startNewGameBtnElement = document.querySelector('#start-game-btn');

// Event listeners
player1EditButtonElement.addEventListener('click', openPlayerConfig);
player2EditButtonElement.addEventListener('click', openPlayerConfig);
cancelConfigButtonElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

gameBoardElement.addEventListener('click', selectGameField);
// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener('click', selectGameField);
// }
