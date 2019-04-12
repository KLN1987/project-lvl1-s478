"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BrGame = exports.getName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _hexletPairs = require("hexlet-pairs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = _readlineSync.default.question('What is your name?');

  console.log(`Hi,${userName} !`);
  return userName;
};

exports.getName = getName;

const BrGame = (discription, game) => {
  const userName = getName();

  for (let i = 0; i < 3; i += 1) {
    const quest = (0, _hexletPairs.car)(game());
    const correctAnswer = (0, _hexletPairs.cdr)(game()) ? 'yes' : 'no';
    console.log(`Question: ${quest}`);

    const answer = _readlineSync.default.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`'Let's try again,' ${userName} !`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

exports.BrGame = BrGame;

var _default = user => BrGame(user);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nYW1lU3RhcnQuanMiXSwibmFtZXMiOlsiZ2V0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiQnJHYW1lIiwiZGlzY3JpcHRpb24iLCJnYW1lIiwiaSIsInF1ZXN0IiwiY29ycmVjdEFuc3dlciIsImFuc3dlciIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQzNCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjs7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLG9CQUF0QixDQUFqQjs7QUFDQUosRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsTUFBS0MsUUFBUyxJQUEzQjtBQUNBLFNBQU9BLFFBQVA7QUFDRCxDQUxNOzs7O0FBT0EsTUFBTUcsTUFBTSxHQUFHLENBQUNDLFdBQUQsRUFBY0MsSUFBZCxLQUF1QjtBQUMzQyxRQUFNTCxRQUFRLEdBQUdILE9BQU8sRUFBeEI7O0FBQ0EsT0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLElBQUksQ0FBNUIsRUFBK0I7QUFDN0IsVUFBTUMsS0FBSyxHQUFHLHNCQUFJRixJQUFJLEVBQVIsQ0FBZDtBQUNBLFVBQU1HLGFBQWEsR0FBRyxzQkFBSUgsSUFBSSxFQUFSLElBQWMsS0FBZCxHQUFzQixJQUE1QztBQUNBUCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZUSxLQUFNLEVBQS9COztBQUNBLFVBQU1FLE1BQU0sR0FBR1Isc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFJTyxNQUFNLEtBQUtELGFBQWYsRUFBOEI7QUFDNUJWLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLElBQUdVLE1BQU8sNkNBQTRDRCxhQUFjLElBQWpGO0FBQ0FWLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLHNCQUFxQkMsUUFBUyxJQUEzQztBQUNBO0FBQ0Q7O0FBQ0RGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRDs7QUFDREQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CQyxRQUFTLEdBQXpDO0FBQ0QsQ0FmTTs7OztlQWlCUVUsSUFBSSxJQUFJUCxNQUFNLENBQUNPLElBQUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgeyBjYXIsIGNkciB9IGZyb20gJ2hleGxldC1wYWlycyc7XG5cbmV4cG9ydCBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJyk7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdXaGF0IGlzIHlvdXIgbmFtZT8nKTtcbiAgY29uc29sZS5sb2coYEhpLCR7dXNlck5hbWV9ICFgKTtcbiAgcmV0dXJuIHVzZXJOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IEJyR2FtZSA9IChkaXNjcmlwdGlvbiwgZ2FtZSkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IGdldE5hbWUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICBjb25zdCBxdWVzdCA9IGNhcihnYW1lKCkpO1xuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBjZHIoZ2FtZSgpKSA/ICd5ZXMnIDogJ25vJztcbiAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7cXVlc3R9YCk7XG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgaWYgKGFuc3dlciAhPT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgY29uc29sZS5sb2coYCcke2Fuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke2NvcnJlY3RBbnN3ZXJ9Jy5gKTtcbiAgICAgIGNvbnNvbGUubG9nKGAnTGV0J3MgdHJ5IGFnYWluLCcgJHt1c2VyTmFtZX0gIWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke3VzZXJOYW1lfSFgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXIgPT4gQnJHYW1lKHVzZXIpO1xuIl19