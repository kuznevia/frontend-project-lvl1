export default (firstNumber, secondNumber, operator) => {
  if (operator === '*') {
    return firstNumber * secondNumber;
  }
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  if (operator === '-') {
    return firstNumber - secondNumber;
  }
  return null;
};
