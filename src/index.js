import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const getName = () => {
  const userName = readlineSync.question('What is your name?');
  console.log(`Hi,${userName} !`);
};
