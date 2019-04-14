import { cons } from 'hexlet-pairs';
import playGame from '../index';
import randomNumber from '../randomNumber';

const description = 'What number is missing in the progression?';
const progresLength = 10;

const getProgression = (stepGame, firstElement) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    const item = firstElement + stepGame * i;
    progression.push(item);
  }
  return progression;
};

const conductGame = () => {
  const stepGame = randomNumber(1, 10);
  const firstElement = randomNumber();

  const progression = getProgression(stepGame, firstElement, progresLength);
  const randomElementProgression = randomNumber(0, progresLength - 1);

  const question = progression
    .map((element, index) => (index === randomElementProgression ? '..' : element))
    .join(' ');

  const answer = String(progression[randomElementProgression]);

  return cons(question, answer);
};
export default user => playGame(description, conductGame, user);
