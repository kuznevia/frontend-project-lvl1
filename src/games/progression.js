import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const getRandomProgression = (minSize, maxSize, minVariable, maxVariable) => {
  const progressionSize = getRandomInt(minSize, maxSize);
  const firstNumber = getRandomInt(minVariable, maxVariable);
  const step = getRandomInt(minVariable, maxVariable);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(firstNumber + (step * i));
  }
  return result;
};

const runRound = () => {
  const randomProgression = getRandomProgression(5, 11, 0, 10);
  const randomNumber = getRandomInt(0, randomProgression.length);
  const randomElement = randomProgression[randomNumber];
  randomProgression[randomNumber] = '..';
  const condition = randomProgression.join(' ');
  const conditionAndAnswer = [condition, String(randomElement)];
  return conditionAndAnswer;
};

export default () => {
  const exerciseText = 'What number is missing in the progression?';
  runGame(exerciseText, runRound);
};
