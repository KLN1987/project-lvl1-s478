import { cons } from 'hexlet-pairs';
import BrainGame from '../gameStart';
import randomNumber from '../even';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = (firstOperand, secondOperand) => {
  const iter = Math.min(firstOperand, secondOperand);
  let result = 1;
  for (let i = 2; i <= iter; i += 1) {
    if (firstOperand % i === 0 && secondOperand % i === 0) {
      result = i;
    }
  }
  return result;
};

const taskGame = () => {
  const firstOperand = randomNumber();
  const secondOperand = randomNumber();
  const question = `${firstOperand} ${secondOperand}`;
  const answer = String(gcdGame(firstOperand, secondOperand));

  return cons(question, answer);
};

export default username => BrainGame(description, taskGame, username);