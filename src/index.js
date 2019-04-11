import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const getName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('What is your name?');
  console.log(`Hi,${userName} !`);
  return userName;
};
