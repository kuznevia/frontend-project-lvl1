import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';

export default () => {
  const numberOfRounds = 3;
  const exerciseText = 'Answer "yes" if the number is even, otherwise answer "no"';
  const randomNumbers = [];
  const exerciseParameters = [];
  const correctAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    randomNumbers.push(getRandomInt(1, 101));
    exerciseParameters.push(`Question: ${randomNumbers[i]}\nYour answer: `);
    correctAnswer.push(randomNumbers[i] % 2 === 0 ? 'yes' : 'no');
  }
  runGame(exerciseText, exerciseParameters, correctAnswer);
};
