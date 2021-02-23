import askName from '../cli.js';
import getRandomInt from '../math/getRandomInt.js';
import runGame from '../index.js';
import numberOfRounds from '../numberofrounds.js';

const getRandomProgression = () => {
  const progressionSize = getRandomInt(5, 11);
  const firstNumber = getRandomInt(0, 10);
  const step = getRandomInt(0, 10);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(firstNumber + (step * i));
  }
  return result;
};

export default (exerciseText) => {
  let randomProgressions = [];
  let randomNumbers = 0;
  let randomElement = 0;
  let correctAnswer = 0;
  let randomProgressionStr = 0;
  let exerciseParameters = '';
  const name = askName();
  for (let i = 1; i <= numberOfRounds(); i += 1) {
    randomProgressions = getRandomProgression();
    randomNumbers = getRandomInt(0, randomProgressions.length);
    randomElement = randomProgressions[randomNumbers];
    correctAnswer = randomElement;
    randomProgressions[randomNumbers] = '..';
    randomProgressionStr = randomProgressions.join(' ');
    exerciseParameters = `Question: ${randomProgressionStr}\nYour answer: `;
    const playerAnswer = runGame(exerciseText, exerciseParameters, correctAnswer, name, i);
    if (!playerAnswer) {
      return;
    }
  }
};
