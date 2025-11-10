const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.#do(message, key, true);
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.#do(message, key, false);
  }

  #do(message, key, encrypt) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const c = message[i];
      if (!A.includes(c)) {
        res += c;
        continue;
      }

      const m = A.indexOf(c);
      const k = A.indexOf(key[j % key.length]);
      const shift = encrypt ? (m + k) % 26 : (m - k + 26) % 26;

      res += A[shift];
      j++;
    }

    return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
