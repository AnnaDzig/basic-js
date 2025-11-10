const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  const DISCARD_NEXT = '--discard-next';
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_NEXT = '--double-next';
  const DOUBLE_PREV = '--double-prev';

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    switch (current) {
      case DISCARD_NEXT:
        i++;                
        break;

      case DISCARD_PREV:
        if (res.length && arr[i - 2] !== DISCARD_NEXT) {
          res.pop();       
        }
        break;

      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        break;

      case DOUBLE_PREV:
        if (i > 0 && res.length && arr[i - 2] !== DISCARD_NEXT) {
          res.push(arr[i - 1]);
        }
        break;

      default:
        res.push(current);
    }
  }

  return res;
}

module.exports = {
  transform
};
