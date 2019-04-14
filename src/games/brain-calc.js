import { cons } from 'hexlet-pairs';
import BrainGame from '../index';
import randomNumber from '../randomNumber';

const description = 'What is the result of the expression?';

const conductGame = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const numberOfRandom = randomNumber(1, 3);

  let question;
  let answer;
  switch (numberOfRandom) {
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
  const executionGame = cons(question, String(answer));
  return executionGame;
};

export default user => BrainGame(description, conductGame, user);
