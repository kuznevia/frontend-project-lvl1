import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';
import numberOfRounds from '../numberofrounds.js';

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
};
