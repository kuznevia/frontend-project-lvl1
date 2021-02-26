import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const getRandomProgression = () => {
  const progressionSize = getRandomInt(5, 11);
  const firstNumber = getRandomInt(0, 10);
  const step = getRandomInt(0, 10);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(firstNumber + (step * i));
  }
  return result;
};

const runRound = () => {
  const randomProgression = getRandomProgression();
  const randomNumber = getRandomInt(0, randomProgression.length);
  const randomElement = randomProgression[randomNumber];
  const correctAnswer = randomElement;
  randomProgression[randomNumber] = '..';
  const randomProgressionStr = randomProgression.join(' ');
  const exerciseParameters = randomProgressionStr;
  const parametersAndAnswer = [exerciseParameters, String(correctAnswer)];
  return parametersAndAnswer;
};

export default () => {
  const exerciseText = 'What number is missing in the progression?';
  runGame(exerciseText, runRound);
};
