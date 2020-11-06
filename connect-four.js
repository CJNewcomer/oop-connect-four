import { Game } from './game.js';

let game = undefined;

// Renders the game board.
//
const updateUI = () => {
  //------------------------------------------------------------ DOM elements
  const clickTargets = document.getElementById('click-targets');
  const boardHolder = document.getElementById('board-holder');
  const gameName = document.getElementById('game-name');

  if (!game) boardHolder.classList.add('is-invisible');
  else {
    boardHolder.classList.remove('is-invisible');
    gameName.innerHTML = game.getName();
    if (game.currentPlayer === 1) {
      clickTargets.classList.add('red');
      clickTargets.classList.remove('black');
    } else if (game.currentPlayer === 2) {
      clickTargets.classList.add('black');
      clickTargets.classList.remove('red');
    }
  }
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 6; j++) {
      const el = document.getElementById(`square-${i}-${j}`);
      const tokenPlayer = game.getTokenAt(i, j);
      el.innerHTML = '';
      if (tokenPlayer === 1) {
        el.innerHTML = '<div class="token red"></div>';
      } else if (tokenPlayer === 2) {
        el.innerHTML = '<div class="token black"></div>';
      }
      const column = document.getElementById(`column-${j}`);
      if (game.isColumnFull(j)) column.classList.add('full');
    }
  }
};

document.addEventListener('DOMContentLoaded', evt => {
  //------------------------------------------------------------ DOM elements
  const clickTargets = document.getElementById('click-targets');
  const player1Name = document.getElementById('player-1-name');
  const player2Name = document.getElementById('player-2-name');
  const newGame = document.getElementById('new-game');

  // Allows a new game by activating the new game button only if both players
  // have provided a name.
  //
  const allowNewGame = () => {
    if (player1Name.value.length && player2Name.value.length) {
      return newGame.removeAttribute('disabled');
    } else {
      return newGame.setAttribute('disabled', '');
    }
  };

  // Creates a new game if players provide names.
  //
  const createNewGame = () => {
    game = new Game(player1Name.value, player2Name.value);
    player1Name.value = '';
    player2Name.value = '';
    newGame.setAttribute('disabled', '');
    updateUI();
  };

  //------------------------------------------------------------ Event handlers
  clickTargets.addEventListener('click', evt => {
    const targetId = evt.target.id[evt.target.id.length - 1];
    game.playInColumn(targetId);
    updateUI();
  });
  player1Name.addEventListener('keyup', allowNewGame);
  player2Name.addEventListener('keyup', allowNewGame);
  newGame.addEventListener('click', createNewGame);
});
