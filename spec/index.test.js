const { capitalize } = require('../index');

test('first character capitalized', () => {
  expect(capitalize('javascript')).toBe('Javascript');
});
