import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

export default () => {
  const randomNumbers = [getRandomInt(1, 101), getRandomInt(1, 101), getRandomInt(1, 101)];
  const question = [`Question: ${randomNumbers[0]} `, `Question: ${randomNumbers[1]} `, `Question: ${randomNumbers[2]} `];
  const calculactions = [randomNumbers[0] % 2 === 0 ? 'yes' : 'no', randomNumbers[1] % 2 === 0 ? 'yes' : 'no', randomNumbers[2] % 2 === 0 ? 'yes' : 'no'];
  runGame('Answer "yes" if the number is even, otherwise answer "no"', question, calculactions);
};
