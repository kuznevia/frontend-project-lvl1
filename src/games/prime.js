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

const runRound = () => {
  const randomNumber = getRandomInt(1, 101);
  const exerciseCondition = randomNumber;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const conditionAndAnswer = [exerciseCondition, String(correctAnswer)];
  return conditionAndAnswer;
};

export default () => {
  const exerciseText = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runGame(exerciseText, runRound);
};
