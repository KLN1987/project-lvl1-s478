"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hexletPairs = require("hexlet-pairs");

var _gameStart = require("../gameStart");

var _even = _interopRequireDefault(require("../even"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const description = 'What is the result of the expression?';

const taskGame = () => {
  const firstOperand = (0, _even.default)();
  const secondOperand = (0, _even.default)();
  const numberOfRandomOperation = (0, _even.default)(0, 2);
  let quest;
  let answer;

  switch (numberOfRandomOperation) {
    case 1:
      quest = `${firstOperand} + ${secondOperand}`;
      answer = firstOperand + secondOperand;
      break;

    case 2:
      quest = `${firstOperand} - ${secondOperand}`;
      answer = firstOperand - secondOperand;
      break;

    default:
      quest = `${firstOperand} * ${secondOperand}`;
      answer = firstOperand * secondOperand;
  }

  return (0, _hexletPairs.cons)(quest, answer);
};

var _default = username => (0, _gameStart.BrGame)(description, taskGame, username);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1jYWxjLmpzIl0sIm5hbWVzIjpbImRlc2NyaXB0aW9uIiwidGFza0dhbWUiLCJmaXJzdE9wZXJhbmQiLCJzZWNvbmRPcGVyYW5kIiwibnVtYmVyT2ZSYW5kb21PcGVyYXRpb24iLCJxdWVzdCIsImFuc3dlciIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsdUNBQXBCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU1DLFlBQVksR0FBRyxvQkFBckI7QUFDQSxRQUFNQyxhQUFhLEdBQUcsb0JBQXRCO0FBQ0EsUUFBTUMsdUJBQXVCLEdBQUcsbUJBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEM7QUFFQSxNQUFJQyxLQUFKO0FBQ0EsTUFBSUMsTUFBSjs7QUFDQSxVQUFRRix1QkFBUjtBQUNFLFNBQUssQ0FBTDtBQUNFQyxNQUFBQSxLQUFLLEdBQUksR0FBRUgsWUFBYSxNQUFLQyxhQUFjLEVBQTNDO0FBQ0FHLE1BQUFBLE1BQU0sR0FBR0osWUFBWSxHQUFHQyxhQUF4QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFRSxNQUFBQSxLQUFLLEdBQUksR0FBRUgsWUFBYSxNQUFLQyxhQUFjLEVBQTNDO0FBQ0FHLE1BQUFBLE1BQU0sR0FBR0osWUFBWSxHQUFHQyxhQUF4QjtBQUNBOztBQUNGO0FBQ0VFLE1BQUFBLEtBQUssR0FBSSxHQUFFSCxZQUFhLE1BQUtDLGFBQWMsRUFBM0M7QUFDQUcsTUFBQUEsTUFBTSxHQUFHSixZQUFZLEdBQUdDLGFBQXhCO0FBWEo7O0FBYUEsU0FBTyx1QkFBS0UsS0FBTCxFQUFZQyxNQUFaLENBQVA7QUFDRCxDQXJCRDs7ZUF1QmVDLFFBQVEsSUFBSSx1QkFBT1AsV0FBUCxFQUFvQkMsUUFBcEIsRUFBOEJNLFFBQTlCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zIH0gZnJvbSAnaGV4bGV0LXBhaXJzJztcbmltcG9ydCB7IEJyR2FtZSB9IGZyb20gJy4uL2dhbWVTdGFydCc7XG5pbXBvcnQgZ2V0TnVtYmVyIGZyb20gJy4uL2V2ZW4nO1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9ICdXaGF0IGlzIHRoZSByZXN1bHQgb2YgdGhlIGV4cHJlc3Npb24/JztcblxuY29uc3QgdGFza0dhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGZpcnN0T3BlcmFuZCA9IGdldE51bWJlcigpO1xuICBjb25zdCBzZWNvbmRPcGVyYW5kID0gZ2V0TnVtYmVyKCk7XG4gIGNvbnN0IG51bWJlck9mUmFuZG9tT3BlcmF0aW9uID0gZ2V0TnVtYmVyKDAsIDIpO1xuXG4gIGxldCBxdWVzdDtcbiAgbGV0IGFuc3dlcjtcbiAgc3dpdGNoIChudW1iZXJPZlJhbmRvbU9wZXJhdGlvbikge1xuICAgIGNhc2UgMTpcbiAgICAgIHF1ZXN0ID0gYCR7Zmlyc3RPcGVyYW5kfSArICR7c2Vjb25kT3BlcmFuZH1gO1xuICAgICAgYW5zd2VyID0gZmlyc3RPcGVyYW5kICsgc2Vjb25kT3BlcmFuZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHF1ZXN0ID0gYCR7Zmlyc3RPcGVyYW5kfSAtICR7c2Vjb25kT3BlcmFuZH1gO1xuICAgICAgYW5zd2VyID0gZmlyc3RPcGVyYW5kIC0gc2Vjb25kT3BlcmFuZDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBxdWVzdCA9IGAke2ZpcnN0T3BlcmFuZH0gKiAke3NlY29uZE9wZXJhbmR9YDtcbiAgICAgIGFuc3dlciA9IGZpcnN0T3BlcmFuZCAqIHNlY29uZE9wZXJhbmQ7XG4gIH1cbiAgcmV0dXJuIGNvbnMocXVlc3QsIGFuc3dlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VybmFtZSA9PiBCckdhbWUoZGVzY3JpcHRpb24sIHRhc2tHYW1lLCB1c2VybmFtZSk7XG4iXX0=