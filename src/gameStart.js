import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('What is your name?');

const getName = () => {
  console.log(`Hi,${userName} !`);
  return userName;
};
export default getName();
