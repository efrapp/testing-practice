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
};
