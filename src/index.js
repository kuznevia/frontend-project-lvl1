import readlineSync from 'readline-sync';
import askName from './cli.js';

export default (log, question, calculactions) => {
  const name = askName();
  console.log(log);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const result = String(calculactions[i]);
    const answer = readlineSync.question(question[i]);
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
