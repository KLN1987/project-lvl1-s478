import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'What is the result of the expression?';
const numberOfOperation = randomNumber(1, 3);

const conductGame = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();

  let question;
  let answer;
  switch (numberOfOperation) {
    case 1:
      question = `${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    case 2:
      question = `${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break;
    default:
      question = `${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
  }
  return cons(question, String(answer));
};

export default user => playGame(description, conductGame, user);
