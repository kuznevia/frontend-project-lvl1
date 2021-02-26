import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';
import numberOfRounds from '../numberofrounds.js';

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

export default (exerciseText) => {
  const operations = ['*', '+', '-'];
  let randomNumberOne = 0;
  let randomNumberTwo = 0;
  let randomOperator = '';
  let exerciseParameters = '';
  let correctAnswer = 0;
  const name = askName();
  for (let i = 1; i <= numberOfRounds(); i += 1) {
    randomNumberOne = getRandomInt(1, 16);
    randomNumberTwo = getRandomInt(1, 16);
    randomOperator = operations[getRandomInt(0, operations.length)];
    exerciseParameters = `Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo}\nYour answer: `;
    correctAnswer = calculateMathExpression(randomNumberOne, randomNumberTwo, randomOperator);
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name, i);
    if (!playerAnswer) {
      return;
    }
  }
};
