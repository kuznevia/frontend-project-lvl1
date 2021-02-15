import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const greatestCommonDivisor = (a, b) => {
  if (b) {
    return greatestCommonDivisor(b, a % b);
  }
  return Math.abs(a);
};

export default () => {
  const randomOne = [getRandomInt(1, 16), getRandomInt(1, 16), getRandomInt(1, 16)];
  const randomTwo = [getRandomInt(1, 16), getRandomInt(1, 16), getRandomInt(1, 16)];
  const calculactions = [greatestCommonDivisor(randomOne[0], randomTwo[0]),
    greatestCommonDivisor(randomOne[1], randomTwo[1]),
    greatestCommonDivisor(randomOne[2], randomTwo[2])];
  const question = [`Question: ${randomOne[0]} ${randomTwo[0]} `,
    `Question: ${randomOne[1]} ${randomTwo[1]} `,
    `Question: ${randomOne[2]} ${randomTwo[2]} `];
  runGame('Find the greatest common divisor of given numbers', question, calculactions);
};
