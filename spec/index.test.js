const { capitalize, reverseString } = require('../index');

test('first character capitalized', () => {
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('0avascript')).toBe('0avascript');
  expect(capitalize('Javascript')).toBe('Javascript');
});

test('string reversed', () => {
  expect(reverseString('javascript')).toBe('tpircsavaj');
  expect(reverseString('t')).toBe('t');
  expect(reverseString('Javascript the best language'))
    .toBe('egaugnal tseb eht tpircsavaJ');
  expect(reverseString(' ')).toBe(' ');
});
