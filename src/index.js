import readlineSync from 'readline-sync';

<<<<<<< HEAD
export default (exerciseText, runRound) => {
  const name = askName();
  console.log(exerciseText);
  const numberOfTries = 3;
  for (let i = 0; i < numberOfTries; i += 1) {
    const parameters = runRound();
    const result = parameters[1];
    const answer = readlineSync.question(`Question: ${parameters[0]}\nYour answer: `);
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
      return;
=======
export default (exerciseText, exerciseParameters, correctAnswer,
  name, thisRoundNumber) => {
  console.log(exerciseText);
  const result = String(correctAnswer);
  const answer = readlineSync.question(exerciseParameters);
  if (result === answer) {
    console.log('Correct!');
    if (thisRoundNumber === 3) {
      console.log(`Congratulations, ${name}!`);
>>>>>>> 46c18db8907cdd9e9146b4d01d2c5c8ed10c0e89
    }
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
  return false;
};
