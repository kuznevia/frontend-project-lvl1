import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';
import numberOfRounds from '../numberofrounds.js';

<<<<<<< HEAD
const runRound = () => {
  const randomNumber = getRandomInt(1, 101);
  const exerciseParameters = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const parameters = [exerciseParameters, String(correctAnswer)];
  return parameters;
};

export default () => {
  const exerciseText = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(exerciseText, runRound);
=======
export default (exerciseText) => {
  let randomNumber = 0;
  let exerciseParameters = '';
  let correctAnswer = '';
  const name = askName();
  for (let i = 1; i <= numberOfRounds(); i += 1) {
    randomNumber = getRandomInt(1, 101);
    exerciseParameters = `Question: ${randomNumber}\nYour answer: `;
    correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name, i);
    if (!playerAnswer) {
      return;
    }
  }
>>>>>>> 46c18db8907cdd9e9146b4d01d2c5c8ed10c0e89
};
