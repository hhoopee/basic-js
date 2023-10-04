const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  const result = [];
  let letter = str[0];
  for (let i = 1; i < str.length; i += 1) {
    if (letter === str[i]) {
      counter += 1;
    } else {
      if (counter > 1) {
        result.push(counter + letter);
      } else if (counter == 1) {
        result.push(letter);
      }
      letter = str[i];
      counter = 1;
    }
  }
  if (counter > 1) {
    result.push(counter + letter);
  } else if (counter == 1) {
    result.push(letter);
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
