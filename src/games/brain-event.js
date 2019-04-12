import { cons } from 'hexlet-pairs';
import BrGame from '../gameStart';
import randomNumber from '../even';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const taskGame = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default user => BrGame(description, taskGame, user);
