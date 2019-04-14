import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'Find the greatest common divisor of given numbers.';

const playGCD = (firstNumber, secondNumber) => {
  const iter = Math.min(firstNumber, secondNumber);
  let result = 1;
  for (let i = 2; i <= iter; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }
  return result;
};

const conductGame = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(playGCD(firstNumber, secondNumber));

  return cons(question, answer);
};

export default user => playGame(description, conductGame, user);
