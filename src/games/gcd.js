import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const getGreatestCommonDivisor = (a, b) => {
  if (b) {
    return getGreatestCommonDivisor(b, a % b);
  }
  return Math.abs(a);
};

export default () => {
  const numberOfRounds = 3;
  const exerciseText = 'Find the greatest common divisor of given numbers';
  let randomNumberOne = 0;
  let randomNumberTwo = 0;
  let exerciseParameters = '';
  let correctAnswer = 0;
  const name = askName();
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumberOne = getRandomInt(1, 16);
    randomNumberTwo = getRandomInt(1, 16);
    exerciseParameters = `Question: ${randomNumberOne} ${randomNumberTwo}\nYour answer: `;
    correctAnswer = getGreatestCommonDivisor(randomNumberOne, randomNumberTwo);
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name);
    if (!playerAnswer) {
      break;
    }
    if (i === numberOfRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
