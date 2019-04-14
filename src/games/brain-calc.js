import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'What is the result of the expression?';
const operation = ['+', '-', '*'];
const randomAction = randomNumber(0, 2);

const conductGame = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const randomOperation = operation[randomAction];

  let answer;
  switch (randomOperation) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      answer = 'Incorrectly';
  }
  const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
  return cons(question, String(answer));
};

export default () => playGame(description, conductGame);
