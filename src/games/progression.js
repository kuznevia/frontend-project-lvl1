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

export default () => {
  const numberOfRounds = 3;
  const exerciseText = 'What number is missing in the progression?';
  const randomProgressions = [];
  const randomNumbers = [];
  const randomElements = [];
  const correctAnswer = [];
  const randomProgressionStr = [];
  const exerciseParameters = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomProgressions.push(getRandomProgression());
    randomNumbers.push(getRandomInt(0, randomProgressions[i].length));
    randomElements.push(randomProgressions[i][randomNumbers[i]]);
    correctAnswer.push(randomElements[i]);
    randomProgressions[i][randomNumbers[i]] = '..';
    randomProgressionStr.push(randomProgressions[i].join(' '));
    exerciseParameters.push(`Question: ${randomProgressionStr[i]}\nYour answer: `);
  }
  runGame(exerciseText, exerciseParameters, correctAnswer);
};
