import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default (exerciseText, runRound) => {
  const name = greetUser();
  console.log(exerciseText);
  const numberOfTries = 3;
  for (let i = 0; i < numberOfTries; i += 1) {
    const conditionAndAnswer = runRound();
    const result = conditionAndAnswer[1];
    const answer = readlineSync.question(`Question: ${conditionAndAnswer[0]}\nYour answer: `);
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
