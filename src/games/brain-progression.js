import { cons } from 'hexlet-pairs';
import BrainGame from '../gameStart';
import randomNumber from '../even';

const description = 'What number is missing in the progression?';
const progresLength = 10;

const getProgression = (progresStep, progresFirstElement, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = progresFirstElement + progresStep * i;
    progression.push(item);
  }
  return progression;
};

const conductGame = () => {
  const progresStep = randomNumber(1, 10);
  const progresFirstElement = randomNumber();

  const progression = getProgression(progresStep, progresFirstElement, progresLength);
  const randomElementProgression = randomNumber(0, progresLength - 1);

  const question = progression
    .map((element, index) => (index === randomElementProgression ? '..' : element))
    .join(' ');

  const answer = String(progression[randomElementProgression]);

  return cons(question, answer);
};

export default username => BrainGame(description, conductGame, username);
