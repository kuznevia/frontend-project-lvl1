import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';
import numberOfRounds from '../numberofrounds.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default (exerciseText) => {
  let randomNumbers = 0;
  let exerciseParameters = '';
  let correctAnswer = '';
  const name = askName();
  for (let i = 1; i <= numberOfRounds(); i += 1) {
    randomNumbers = (getRandomInt(1, 101));
    exerciseParameters = `Question: ${randomNumbers}\nYour answer: `;
    correctAnswer = isPrime(randomNumbers) ? 'yes' : 'no';
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name, i);
    if (!playerAnswer) {
      return;
    }
  }
};
