import readlineSync from 'readline-sync';
import askName from './cli.js';

export default (exerciseText, runRound) => {
  const name = askName();
  console.log(exerciseText);
  const numberOfTries = 3;
  for (let i = 0; i < numberOfTries; i += 1) {
    const parametersAndAnswer = runRound();
    const result = parametersAndAnswer[1];
    const answer = readlineSync.question(`Question: ${parametersAndAnswer[0]}\nYour answer: `);
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
