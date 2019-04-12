"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hexletPairs = require("hexlet-pairs");

var _gameStart = require("../gameStart");

var _even = _interopRequireDefault(require("../even"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const taskGame = () => {
  const question = (0, _even.default)();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return (0, _hexletPairs.cons)(question, correctAnswer);
};

var _default = user => (0, _gameStart.BrGame)(description, taskGame, user);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1ldmVudC5qcyJdLCJuYW1lcyI6WyJkZXNjcmlwdGlvbiIsImlzRXZlbiIsIm51bWJlciIsInRhc2tHYW1lIiwicXVlc3Rpb24iLCJjb3JyZWN0QW5zd2VyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLG9EQUFwQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sSUFBSUEsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUF4Qzs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxRQUFRLEdBQUcsb0JBQWpCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHSixNQUFNLENBQUNHLFFBQUQsQ0FBTixHQUFtQixLQUFuQixHQUEyQixJQUFqRDtBQUNBLFNBQU8sdUJBQUtBLFFBQUwsRUFBZUMsYUFBZixDQUFQO0FBQ0QsQ0FKRDs7ZUFNZUMsSUFBSSxJQUFJLHVCQUFPTixXQUFQLEVBQW9CRyxRQUFwQixFQUE4QkcsSUFBOUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnMgfSBmcm9tICdoZXhsZXQtcGFpcnMnO1xuaW1wb3J0IHsgQnJHYW1lIH0gZnJvbSAnLi4vZ2FtZVN0YXJ0JztcbmltcG9ydCBnZXRSYW5kb21OdW1iZXIgZnJvbSAnLi4vZXZlbic7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gJ0Fuc3dlciBcInllc1wiIGlmIG51bWJlciBldmVuIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLic7XG5jb25zdCBpc0V2ZW4gPSBudW1iZXIgPT4gbnVtYmVyICUgMiA9PT0gMDtcblxuY29uc3QgdGFza0dhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXN0aW9uID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBpc0V2ZW4ocXVlc3Rpb24pID8gJ3llcycgOiAnbm8nO1xuICByZXR1cm4gY29ucyhxdWVzdGlvbiwgY29ycmVjdEFuc3dlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyID0+IEJyR2FtZShkZXNjcmlwdGlvbiwgdGFza0dhbWUsIHVzZXIpO1xuIl19