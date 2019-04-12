"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
const getName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = _readlineSync.default.question('What is your name?');

  console.log(`Hi,${userName} !`);
  return userName;
};

exports.getName = getName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXROYW1lIiwiY29uc29sZSIsImxvZyIsInVzZXJOYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ08sTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDM0JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaOztBQUNBLFFBQU1DLFFBQVEsR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isb0JBQXRCLENBQWpCOztBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxNQUFLQyxRQUFTLElBQTNCO0FBQ0EsU0FBT0EsUUFBUDtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcbiAgY29uc29sZS5sb2coJ0Fuc3dlciBcInllc1wiIGlmIG51bWJlciBldmVuIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLicpO1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignV2hhdCBpcyB5b3VyIG5hbWU/Jyk7XG4gIGNvbnNvbGUubG9nKGBIaSwke3VzZXJOYW1lfSAhYCk7XG4gIHJldHVybiB1c2VyTmFtZTtcbn07XG4iXX0=