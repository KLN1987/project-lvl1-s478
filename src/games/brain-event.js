import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const conductGame = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default user => playGame(description, conductGame, user);
