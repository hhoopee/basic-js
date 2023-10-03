const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.keys(date).length > 0 || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  return month >= 0 && month < 2 || month == 11 ? 'winter' : month >= 2 && month < 5 ? 'spring' : month >= 5 && month < 8 ? 'summer' : 'fall';
}

module.exports = {
  getSeason
};
