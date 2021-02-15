import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const randomNumbers = [getRandomInt(1, 101), getRandomInt(1, 101), getRandomInt(1, 101)];
  const question = [`Question: ${randomNumbers[0]} `, `Question: ${randomNumbers[1]} `, `Question: ${randomNumbers[2]} `];
  const calculactions = [isPrime(randomNumbers[0]) ? 'yes' : 'no', isPrime(randomNumbers[1]) ? 'yes' : 'no', isPrime(randomNumbers[2]) ? 'yes' : 'no'];
  runGame('Answer "yes" if given number is prime. Otherwise answer "no"', question, calculactions);
};
