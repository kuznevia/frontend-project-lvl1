import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const runRound = () => {
  const randomNumber = getRandomInt(1, 101);
  const exerciseParameters = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const parameters = [exerciseParameters, String(correctAnswer)];
  return parameters;
};

export default () => {
  const exerciseText = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(exerciseText, runRound);
};
