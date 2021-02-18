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
  const randomNumberOne = [];
  const randomNumberTwo = [];
  const exerciseParameters = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumberOne.push(getRandomInt(1, 16));
    randomNumberTwo.push(getRandomInt(1, 16));
    exerciseParameters.push(`Question: ${randomNumberOne[i]} ${randomNumberTwo[i]}\nYour answer: `);
    correctAnswer.push(getGreatestCommonDivisor(randomNumberOne[i], randomNumberTwo[i]));
  }
  runGame(exerciseText, exerciseParameters, correctAnswer);
};
