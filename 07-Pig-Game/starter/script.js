'use strict';
// Selecting condition elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//Elements in use
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//ROLLING DIE FUNCTION
btnRoll.addEventListener('click', function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Show dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; //dice has a source attribute
  //3. Check for the rolled 1, if true swtich next player
  if (dice != 1) {
    //Add dice to current player
    currentScore += dice;
    current0El.textContent = currentScore; //Change later
  } else {
    //Switch to next player
  }
});
