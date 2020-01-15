module.exports = {
  capitalize(str) {
    return str.replace(/^./, str[0].toUpperCase());
  },
  reverseString(str) {
    return str.split('').reverse().join('');
  },
};
