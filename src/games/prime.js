import askName from '../cli.js';
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
  let randomNumbers = 0;
  let exerciseParameters = '';
  let correctAnswer = '';
  const name = askName();
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumbers = (getRandomInt(1, 101));
    exerciseParameters = `Question: ${randomNumbers}\nYour answer: `;
    correctAnswer = isPrime(randomNumbers) ? 'yes' : 'no';
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name);
    if (!playerAnswer) {
      break;
    }
    if (i === numberOfRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
