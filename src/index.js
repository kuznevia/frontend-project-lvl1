import readlineSync from 'readline-sync';

export default (exerciseText, exerciseParameters, correctAnswer,
  name, thisRoundNumber) => {
  console.log(exerciseText);
  const result = String(correctAnswer);
  const answer = readlineSync.question(exerciseParameters);
  if (result === answer) {
    console.log('Correct!');
    if (thisRoundNumber === 3) {
      console.log(`Congratulations, ${name}!`);
    }
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
  return false;
};
