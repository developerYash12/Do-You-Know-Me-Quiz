let readlineSync = require('readline-sync');
console.log('Welcome to Quiz! Are You Excited?');
console.log(" ");
let userName = readlineSync.question('What is your name? ');
console.log(" ");
console.log('Welcome, Play your best ' + userName + '!!');
console.log(" ");

let score = 0;
//function
function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log('Congrats! You are right..');
    score = score + 1;
  }
  else {
    console.log('Sorry! You loose :-( ');
    score = score - 1;
  }
}


console.log('Ready to Play ? ');
console.log('');
console.log('Your current score is ' + score);
console.log('');
console.log('Remeber there is -1 for every wrong answer ');

let questions = [
  {
    question: 'Where do I (Yash) lives?',
    answer: 'Gadarwara'
  },
  {
    question: 'What is my favourite color ?',
    answer: 'orange'
  },
  {
    question: 'What is my favourite sports ?',
    answer: 'cricket'
  },
  {
    question: 'Which company mobile am i using ?',
    answer: 'redmi'
  },
  {
    question: 'What is my birth month  ?',
    answer: 'april'
  }
];

//loop around object
for (let i = 0; i < questions.length; i++) {
  let curr = questions[i];
  play(curr.question, curr.answer);
}

console.log('Game Over!! Here is your Score .');
console.log('Yayyyy! You scored : ' + score);