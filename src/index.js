import readlineSync from 'readline-sync';

export const getName = () => {
  const userName = readlineSync.question('What is your name?');
  console.log ('Hi, ' + userName + ' !');
}

