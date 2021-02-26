import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const getGreatestCommonDivisor = (a, b) => {
  if (b) {
    return getGreatestCommonDivisor(b, a % b);
  }
  return Math.abs(a);
};

const runRound = () => {
  const randomNumberOne = getRandomInt(1, 101);
  const randomNumberTwo = getRandomInt(1, 101);
  const exerciseParameters = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumberOne, randomNumberTwo);
  const parametersAndAnswer = [exerciseParameters, String(correctAnswer)];
  return parametersAndAnswer;
};

export default () => {
  const exerciseText = 'Find the greatest common divisor of given numbers';
  runGame(exerciseText, runRound);
};
