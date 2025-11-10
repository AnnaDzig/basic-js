const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];

  for (let member of members) {
    if (typeof member === 'string') {
      member = member.trim();
      if (member.length > 0) {
        result.push(member[0].toUpperCase());
      }
    }
  }

  return result.sort().join('');
}


module.exports = {
  createDreamTeam
};
