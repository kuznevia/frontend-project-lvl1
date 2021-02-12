import getRandomInt from './getrandomint.js';

export default () => {
  const progressionSize = getRandomInt(5, 11);
  const startingValue = getRandomInt(0, 10);
  const step = getRandomInt(0, 10);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(startingValue + (step * i));
  }
  return result;
};
