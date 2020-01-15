const { capitalize, reverseString, calculator } = require('../index');

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

test('arithmetic operations', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(10, 4)).toBe(6);
  expect(calculator.divide(60, 3)).toBe(20);
  expect(calculator.multiply(30, 7)).toBe(210);
});
