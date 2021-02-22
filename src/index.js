import readlineSync from 'readline-sync';

export default (exerciseText, exerciseParameters, correctAnswer,
  name) => {
  console.log(exerciseText);
  const result = String(correctAnswer);
  const answer = readlineSync.question(exerciseParameters);
  if (result === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
  return false;
};
