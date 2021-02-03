import readlineSync from 'readline-sync';

export default () => {
console.log('May I have your name?');
const name = readlineSync.question('Your answer: ');
console.log(`Hello, ${name}`);
};