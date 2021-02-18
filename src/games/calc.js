import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

const calculateTwoNumbersWithRandomOperator = (firstNumber, secondNumber, operator) => {
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
  const numberOfRounds = 3;
  const exerciseText = 'What is the result of the expression?';
  const operations = ['*', '+', '-'];
  const randomNumberOne = [];
  const randomNumberTwo = [];
  const randomOperator = [];
  const exerciseParameters = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumberOne.push(getRandomInt(1, 16));
    randomNumberTwo.push(getRandomInt(1, 16));
    randomOperator.push(operations[getRandomInt(0, operations.length)]);
    exerciseParameters.push(`Question: ${randomNumberOne[i]} ${randomOperator[i]} ${randomNumberTwo[i]}\nYour answer: `);
    correctAnswer.push(calculateTwoNumbersWithRandomOperator(randomNumberOne[i],
      randomNumberTwo[i], randomOperator[i]));
  }
  runGame(exerciseText, exerciseParameters, correctAnswer);
};
