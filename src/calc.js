import readlineSync from 'readline-sync';
import askName from './cli.js';
import getRandomInt from './getrandomint.js';
import numbersAndOperator from './numbersAndOperator.js';

export default () => {
  const name = askName();
  console.log('What is the result of the expression?');
  const operations = ['*', '+', '-'];
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = getRandomInt(1, 16);
    const randomNumberTwo = getRandomInt(1, 16);
    const randomOperator = operations[getRandomInt(1, 4) - 1];
    const result = numbersAndOperator(randomNumberOne, randomNumberTwo, randomOperator);
    const answer = Number(readlineSync.question(`Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo} `));
    if (result === answer) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Your answer: ${answer}`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
