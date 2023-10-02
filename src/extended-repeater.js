const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = 'separator' in options ? options.separator : '+';
  let additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';
  let repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  let additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
  let addition = 'addition' in options ? Array(additionRepeatTimes).fill(options.addition + '').join(additionSeparator) : '';
  return Array(repeatTimes).fill(str + addition).join(separator);
}

module.exports = {
  repeater
};
