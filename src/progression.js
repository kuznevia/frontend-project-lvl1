import readlineSync from 'readline-sync';
import askName from './cli.js';
import getRandomProgression from './getRandomProgression.js';
import getRandomInt from './getrandomint.js';

export default () => {
  const name = askName();
  console.log('What number is missing in the progression?');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomProgression = getRandomProgression();
    const randomNumber = getRandomInt(0, randomProgression.length);
    const randomElement = randomProgression[randomNumber];
    const result = randomElement;
    randomProgression[randomNumber] = '..';
    const randomProgressionStr = randomProgression.join(' ');
    const answer = Number(readlineSync.question(`Question: ${randomProgressionStr} `));
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
