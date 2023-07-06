'use strict';
// Selecting condition elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnCloseModal = document.querySelector('.close-modal');
//Elements in use
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const pig = document.getElementById('pig');

//Modal Stuff

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

let currentScore, activePlayer, playing, scores;
let player1Name = prompt('Enter Player 1 Name');
let player2Name = prompt('Enter Player 2 Name');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  document.getElementById(`name--0`).textContent = player1Name;
  document.getElementById(`name--1`).textContent = player2Name;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//ROLLING DIE FUNCTION
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Show dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //dice has a source attribute
    //3. Check for the rolled 1, if true swtich next player
    if (dice != 1) {
      //Add dice to current player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's global score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score >= 50
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document.getElementById(`name--${activePlayer}`).textContent = `${
        activePlayer == 0 ? player1Name : player2Name
      } Wins!🥇`;
      document.getElementById(`pig`).textContent = `Dear ${
        activePlayer == 1 ? player1Name : player2Name
      }! You are a pig!!!`;
      console.log('User Won, Now calling -> ', openModal());
      btnCloseModal.addEventListener('click', closeModal);
      overlay.addEventListener('click', closeModal);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
