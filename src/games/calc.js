import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const numbersAndOperator = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '*':
      return firstNumber * secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return null;
  }
};

export default () => {
  const operations = ['*', '+', '-'];
  const randomOne = [getRandomInt(1, 16), getRandomInt(1, 16), getRandomInt(1, 16)];
  const randomTwo = [getRandomInt(1, 16), getRandomInt(1, 16), getRandomInt(1, 16)];
  const randomOperator = [operations[getRandomInt(1, 4) - 1],
    operations[getRandomInt(1, 4) - 1],
    operations[getRandomInt(1, 4) - 1]];
  const calculactions = [numbersAndOperator(randomOne[0], randomTwo[0], randomOperator[0]),
    numbersAndOperator(randomOne[1], randomTwo[1], randomOperator[1]),
    numbersAndOperator(randomOne[2], randomTwo[2], randomOperator[2])];
  const question = [`Question: ${randomOne[0]} ${randomOperator[0]} ${randomTwo[0]} `,
    `Question: ${randomOne[1]} ${randomOperator[1]} ${randomTwo[1]} `,
    `Question: ${randomOne[2]} ${randomOperator[2]} ${randomTwo[2]} `];
  runGame('What is the result of the expression?', question, calculactions);
};
