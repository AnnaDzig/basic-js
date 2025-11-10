const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  const used = new Set();
  const counter = Object.create(null);

  for (const name of names) {
    if (!used.has(name)) {
      res.push(name);
      used.add(name);
      counter[name] = 1;
    } else {
      let k = counter[name] || 1;
      let candidate = `${name}(${k})`;
      while (used.has(candidate)) {
        k++;
        candidate = `${name}(${k})`;
      }
      res.push(candidate);
      used.add(candidate);
      counter[name] = k + 1;
      counter[candidate] = 1;
    }
  }

  return res;
}

module.exports = {
  renameFiles
};
