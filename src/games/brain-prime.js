import { cons } from 'hexlet-pairs';
import BrainGame from '../index';
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
  const taskNumber = randomNumber();
  const correctAnswer = primeGame(taskNumber) ? 'yes' : 'no';
  const coursOfGame = cons(taskNumber, correctAnswer);
  return coursOfGame;
};

export default username => BrainGame(description, conductGame, username);
