import { cons } from 'hexlet-pairs';
import BrGame from '../gameStart';
import randomNumber from '../even';

const description = 'What is the result of the expression?';

const taskGame = () => {
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
  return cons(question, String(answer));
};

export default user => BrGame(description, taskGame, user);
