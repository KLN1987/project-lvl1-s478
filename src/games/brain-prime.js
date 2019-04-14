import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const conductGame = () => {
  const question = randomNumber();
  const correctAnswer = primeGame(question) ? 'yes' : 'no';
  const coursOfGame = cons(question, correctAnswer);
  return coursOfGame;
};

export default user => playGame(description, conductGame, user);
