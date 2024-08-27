
'use strict';

// document.querySelector('.check').addEventListener('click',function(){
// alert(`You current guess is ${(document.querySelector('.guess').textContent)}`);
// })
let maxi = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

// document.querySelector('.number').textContent = secretNumber;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    if (score > 0) {
      // document.querySelector('.message').textContent = '⛔ No Number!';
      displayMessage('⛔ No Number!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😥YOU LOST THE GaME';
      displayMessage('😥YOU LOST THE GaME');
      return;
    }
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > maxi) {
      maxi = score;
      document.querySelector('.highscore').textContent = '' + maxi;
    }

    document.querySelector('.number').style.width = '30rem';
    return;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = String(score);
      displayMessage(guess > secretNumber ? '👎Too High' : '👎Too Low');
    } else {
      displayMessage('😥YOU LOST THE GaME');
      return;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 0) {
    //     // document.querySelector('.message').textContent = '👎Too High';
    //     displayMessage('👎Too High');
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     // document.querySelector('.message').textContent = '😥YOU LOST THE GaME';
    //     displayMessage('😥YOU LOST THE GaME');
    //     return;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     // document.querySelector('.message').textContent = '👎Too Low';
    //     displayMessage('👎Too Low');
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     // document.querySelector('.message').textContent = '😥YOU LOST THE GaME';
    //     displayMessage('😥YOU LOST THE GaME');
    //     return;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});
