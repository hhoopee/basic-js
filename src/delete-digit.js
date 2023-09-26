const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let start = str.slice(1);
  for (let i = 0; i < 10; i += 1) {
    let next = str.includes(i) ? str.slice(0, str.indexOf(i)) + str.slice(str.indexOf(i) + 1) : 0;
    console.log(next)
    if (Number(start) < Number(next)){
      start = next;
    }
  }
  return Number(start);
}

module.exports = {
  deleteDigit
};
