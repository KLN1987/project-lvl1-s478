import readlineSync from 'readline-sync';

import randomNumber from './even';

import {getName} from './index';

export const getEven = number => number % 2 === 0;

export const BrGame = () => {
  const userName = getName();
  for (let i = 0; i < 3; i += 1) {
    const taskGame = randomNumber();
    const correctAnswer = getEven(taskGame) ? 'yes' : 'no';
    console.log(`Question: ${taskGame}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`'Let's try again,' ${userName} !`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default user => BrGame(user);
