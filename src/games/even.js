import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const runRound = () => {
  const randomNumber = getRandomInt(1, 101);
  const exerciseCondition = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const conditionAndAnswer = [exerciseCondition, String(correctAnswer)];
  return conditionAndAnswer;
};

export default () => {
  const exerciseText = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(exerciseText, runRound);
};
