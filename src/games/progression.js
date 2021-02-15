import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const getRandomProgression = () => {
  const progressionSize = getRandomInt(5, 11);
  const startingValue = getRandomInt(0, 10);
  const step = getRandomInt(0, 10);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(startingValue + (step * i));
  }
  return result;
};

export default () => {
  const randomProgressions = [getRandomProgression(),
    getRandomProgression(),
    getRandomProgression()];
  const randomNumbers = [getRandomInt(0, randomProgressions[0].length),
    getRandomInt(0, randomProgressions[1].length),
    getRandomInt(0, randomProgressions[2].length)];
  const randomElements = [randomProgressions[0][randomNumbers[0]],
    randomProgressions[1][randomNumbers[1]],
    randomProgressions[2][randomNumbers[2]]];
  const calculations = [randomElements[0], randomElements[1], randomElements[2]];
  randomProgressions[0][randomNumbers[0]] = '..';
  randomProgressions[1][randomNumbers[1]] = '..';
  randomProgressions[2][randomNumbers[2]] = '..';
  const randomProgressionStr = [randomProgressions[0].join(' '), randomProgressions[1].join(' '), randomProgressions[2].join(' ')];
  const question = [`Question: ${randomProgressionStr[0]} `, `Question: ${randomProgressionStr[1]} `, `Question: ${randomProgressionStr[2]} `];
  runGame('What number is missing in the progression?', question, calculations);
};
