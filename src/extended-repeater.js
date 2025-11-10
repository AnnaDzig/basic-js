const { NotImplementedError } = require('../lib');

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
  str = '' + str;

  const addition = options.hasOwnProperty('addition') ? '' + options.addition : '';
  const additionTimes = options.additionRepeatTimes || 1;
  const additionSep = options.additionSeparator || '|';
  const mainTimes = options.repeatTimes || 1;
  const mainSep = options.separator || '+';

  const additionBlock = Array(additionTimes).fill(addition).join(additionSep);

  return Array(mainTimes).fill(str + additionBlock).join(mainSep);
}


module.exports = {
  repeater
};
