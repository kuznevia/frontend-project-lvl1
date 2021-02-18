import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

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

export default () => {
  const numberOfRounds = 3;
  const exerciseText = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const randomNumbers = [];
  const exerciseParameters = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumbers.push(getRandomInt(1, 101));
    exerciseParameters.push(`Question: ${randomNumbers[i]} `);
    correctAnswer.push(isPrime(randomNumbers[i]) ? 'yes' : 'no');
  }
  runGame(exerciseText, exerciseParameters, correctAnswer);
};
