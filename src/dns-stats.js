const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (let domain of domains) {
    const parts = domain.split('.').reverse();
    let key = '';

    for (let i = 0; i < parts.length; i++) {
      key += `.${parts[i]}`;
      result[key] = (result[key] || 0) + 1;
    }
  }

  return result;
}


module.exports = {
  getDNSStats
};
