import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('What is your name?');
console.log(`Hi,${userName} !`);

const numberOfTrueAnswer = 3;

const playGame = (discription, askGame) => {
  console.log(discription);
  for (let i = 0; i < numberOfTrueAnswer; i += 1) {
    const task = askGame();
    const taskQuestion = car(task);
    const correctAnswer = cdr(task);
    console.log(`Question: ${taskQuestion}`);
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
export default playGame;
