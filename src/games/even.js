import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const runRound = () => {
  const randomNumber = getRandomInt(1, 101);
  const exerciseParameters = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const parametersAndAnswer = [exerciseParameters, String(correctAnswer)];
  return parametersAndAnswer;
};

export default () => {
  const exerciseText = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(exerciseText, runRound);
};
