import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'What is the result of the expression?';

const conductGame = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operation = '+-*'[randomNumber(0, 2)];

  let answer;
  switch (operation) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    default:
      answer = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return cons(question, String(answer));
};

export default () => playGame(description, conductGame);
