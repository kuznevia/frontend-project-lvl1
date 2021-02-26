import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const calculateMathExpression = (firstNumber, secondNumber, operator) => {
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

const runRound = () => {
  const operations = ['*', '+', '-'];
  const randomNumberOne = getRandomInt(1, 16);
  const randomNumberTwo = getRandomInt(1, 16);
  const randomOperator = operations[getRandomInt(0, operations.length)];
  const exerciseParameters = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const correctAnswer = calculateMathExpression(randomNumberOne, randomNumberTwo, randomOperator);
  const parametersAndAnswer = [exerciseParameters, String(correctAnswer)];
  return parametersAndAnswer;
};

export default () => {
  const exerciseText = 'What is the result of the expression?';
  runGame(exerciseText, runRound);
};
