module.exports = {
  capitalize(str) {
    return str.replace(/^./, str[0].toUpperCase());
  },
  reverseString(str) {
    return str.split('').reverse().join('');
  },
  calculator: {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    divide(a, b) { return a / b; },
    multiply(a, b) { return a * b; },
  },
  caesar(text, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const cipher = (chIndex) => (chIndex + key) % 26;
    const strForEach = Array.prototype.forEach.bind(text);
    let cipherText = '';

    strForEach((c) => {
      if (/\W/.test(c)) {
        cipherText += c;
      } else {
        cipherText += alphabet[cipher(alphabet.indexOf(c))];
      }
    });

    return cipherText;
  },
  analyze(ary) {
    if (ary.length === 0) return {};

    const average = () => ary.reduce((acc, current) => acc + current) / ary.length;
    const min = () => ary.reduce((acc, current) => (acc < current ? acc : current));
    const max = () => ary.reduce((acc, current) => (acc > current ? acc : current));
    const length = () => ary.length;

    return {
      average: average(),
      min: min(),
      max: max(),
      length: length(),
    };
  },
};
