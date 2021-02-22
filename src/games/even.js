import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

export default () => {
  const numberOfRounds = 3;
  const exerciseText = 'Answer "yes" if the number is even, otherwise answer "no"';
  let randomNumber = 0;
  let exerciseParameters = '';
  let correctAnswer = '';
  const name = askName();
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumber = getRandomInt(1, 101);
    exerciseParameters = `Question: ${randomNumber}\nYour answer: `;
    correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name);
    if (!playerAnswer) {
      break;
    }
    if (i === numberOfRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
