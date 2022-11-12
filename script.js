'use strict';
// 'use strict';
// //Taking element from DOM
// const rollDice = document.querySelector('.btn--roll');
// const hold = document.querySelector('.btn--hold');
// const newGame = document.querySelector('.btn--new');
// const dice = document.querySelector('.dice');
// const score0 = document.querySelector('#score--0');
// const current0 = document.querySelector('#current--0');
// const score1 = document.querySelector('#score--1');
// const current1 = document.querySelector('#current--1');
// const players = document.querySelectorAll('.player');
// //Global Variable
// const diceImg = [
//   './dice-1.png',
//   './dice-2.png',
//   './dice-3.png',
//   './dice-4.png',
//   './dice-5.png',
//   './dice-6.png',
// ];
// let Score0 = 0;
// let Score1 = 0;
// let Current0 = 0;
// let Current1 = 0;

// let rolledDice = Math.ceil(Math.random() * 6);
// let player1Turn = true;
// let gameEnd = false;
// const ActivePlayerFunction = () => {
//   for (let i = 0; i < players.length; i++) {
//     if (players[i].classList.contains('player--active')) {
//       players[i].classList.remove('player--active');
//     } else {
//       players[i].classList.add('player--active');
//     }
//   }
// };
// //start coding

// dice.classList.add('hidden');

// rollDice.addEventListener('click', () => {
//   if (gameEnd) {
//     return;
//   }
//   dice.classList.remove('hidden');
//   rolledDice = Math.ceil(Math.random() * 6);
//   //   if (rolledDice === 1) {
//   //     dice.classList.add('hidden');
//   //   }
//   dice.src = diceImg[rolledDice - 1];
//   if (player1Turn) {
//     Current0 += rolledDice;
//     if (rolledDice === 1) {
//       player1Turn = false;
//       ActivePlayerFunction();
//       Current0 = 0;
//     }
//     current0.textContent = Current0;
//   } else {
//     Current1 += rolledDice;
//     if (rolledDice === 1) {
//       player1Turn = true;
//       ActivePlayerFunction();
//       Current1 = 0;
//     }
//     current1.textContent = Current1;
//   }
// });
// hold.addEventListener('click', () => {
//   if (gameEnd) {
//     return;
//   }
//   dice.classList.add('hidden');
//   if (player1Turn) {
//     Score0 += Current0;
//     score0.textContent = Score0;
//     if (Score0 >= 100) {
//       players[0].classList.add('player--winner');
//       gameEnd = true;
//     }
//     player1Turn = false;
//     ActivePlayerFunction();
//   } else {
//     Score1 += Current1;
//     score1.textContent = Score1;
//     if (Score1 >= 100) {
//       players[1].classList.add('player--winner');
//       gameEnd = true;
//     }
//     player1Turn = true;
//     ActivePlayerFunction();
//   }
// });
// newGame.addEventListener('click', () => {
//   document.querySelector('.player--winner').classList.remove('player--winner');
//   player1Turn = true;
//   gameEnd = false;
//   current0.textContent = 0;
//   current1.textContent = 0;
//   score0.textContent = 0;
//   score1.textContent = 0;
//   Current0 = 0;
//   Current1 = 0;
//   Score0 = 0;
//   Score1 = 0;
// });

//Taking element from DOM
const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const players = document.querySelectorAll('.player');
const newGame = document.querySelector('.btn--new');
//Global Variable
const diceImg = [
  './dice-1.png',
  './dice-2.png',
  './dice-3.png',
  './dice-4.png',
  './dice-5.png',
  './dice-6.png',
];
let rolledDice = Math.ceil(Math.random() * 6);
let current = [0, 0];
let score = [0, 0];
let ActivePlayer = 0;
let isGameEnd = false;
//start coding

const ActivePlayerFunction = () => {
  current[ActivePlayer] = 0;
  document.querySelector(`#current--${ActivePlayer}`).textContent =
    current[ActivePlayer];
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  for (let i = 0; i < players.length; i++) {
    players[i].classList.toggle('player--active');
  }
};

rollDice.addEventListener('click', () => {
  if (isGameEnd) {
    return;
  }
  rolledDice = Math.ceil(Math.random() * 6);
  dice.src = diceImg[rolledDice - 1];
  if (rolledDice !== 1) {
    current[ActivePlayer] += rolledDice;
    document.querySelector(`#current--${ActivePlayer}`).textContent =
      current[ActivePlayer];
  } else {
    ActivePlayerFunction();
  }
});
hold.addEventListener('click', () => {
  if (isGameEnd) {
    return;
  }
  score[ActivePlayer] += current[ActivePlayer];

  document.querySelector(`#score--${ActivePlayer}`).textContent =
    score[ActivePlayer];
  if (score[ActivePlayer] >= 100) {
    players[ActivePlayer].classList.add('player--winner');

    isGameEnd = true;
  }
  ActivePlayerFunction();
});
newGame.addEventListener('click', () => {
  isGameEnd = false;
  current = [0, 0];
  score = [0, 0];
  if (ActivePlayer !== 0) {
    ActivePlayerFunction();
    ActivePlayer = 0;
  }

  for (let j = 0; j < 2; j++) {
    document.querySelector(`#score--${j}`).textContent = 0;
    document.querySelector(`#current--${j}`).textContent = 0;
  }
  document.querySelector('.player--winner').classList.remove('player--winner');
});
