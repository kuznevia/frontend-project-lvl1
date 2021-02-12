import readlineSync from 'readline-sync';
import askName from './cli.js';
import getRandomInt from './getrandomint.js';
import isPrime from './isPrime.js';

export default () => {
  const name = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(1, 101);
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    if (isPrime(randomNumber)) {
      if (answer === 'yes') {
        console.log(`Your answer: ${answer}`);
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`Your answer: ${answer}`);
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
        break;
      }
    } else if (answer === 'no') {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Your answer: ${answer}`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};