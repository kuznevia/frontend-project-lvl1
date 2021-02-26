import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';
import numberOfRounds from '../numberofrounds.js';

const getGreatestCommonDivisor = (a, b) => {
  if (b) {
    return getGreatestCommonDivisor(b, a % b);
  }
  return Math.abs(a);
};

export default (exerciseText) => {
  let randomNumberOne = 0;
  let randomNumberTwo = 0;
  let exerciseParameters = '';
  let correctAnswer = 0;
  const name = askName();
  for (let i = 1; i <= numberOfRounds(); i += 1) {
    randomNumberOne = getRandomInt(1, 16);
    randomNumberTwo = getRandomInt(1, 16);
    exerciseParameters = `Question: ${randomNumberOne} ${randomNumberTwo}\nYour answer: `;
    correctAnswer = getGreatestCommonDivisor(randomNumberOne, randomNumberTwo);
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name, i);
    if (!playerAnswer) {
      return;
    }
  }
};
