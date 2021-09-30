'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number !';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.guess').value = '23';
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

// console.log(secretNumber);



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

// when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' No number !';

// when player win 
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' you win !';

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;

// implement highscore
if(score > highscore){
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}
 
// when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high !';
      score--; // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose !';
      document.querySelector('body').style.backgroundColor = '#FF0000'; 
      score--; // score = score - 1;
      document.querySelector('.score').textContent = 0;
    }
  
  // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low !';
      score--; // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose';
      document.querySelector('body').style.backgroundColor = '#FF0000';
      score--; // score = score - 1;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reinitialisation
document.querySelector('.again').addEventListener('click', function(){
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Guess starting ....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
} );
