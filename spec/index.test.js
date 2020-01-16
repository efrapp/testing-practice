const {
  capitalize, reverseString, calculator, caesar, analyze,
} = require('../index');

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

describe('caesar method', () => {
  test('with an entire string and a shift of 1', () => {
    const plainText = 'defendtheeastwallofthecastle';
    const cipherText = 'efgfoeuiffbtuxbmmpguifdbtumf';

    expect(caesar(plainText, 1)).toBe(cipherText);
  });
  test('with non-word character included', () => {
    const plainText = 'defend the east wall of the castle';
    const cipherText = 'efgfoe uif fbtu xbmm pg uif dbtumf';

    expect(caesar(plainText, 1)).toBe(cipherText);
  });
  test('wrapping from z to a', () => {
    const plainText = 'defend the east wall of the castle';
    const cipherText = 'cdedmc sgd dzrs vzkk ne sgd bzrskd';

    expect(caesar(plainText, 25)).toBe(cipherText);
  });
  test('without shifting', () => {
    const plainText = 'defend the east wall of the castle';
    const cipherText = 'defend the east wall of the castle';

    expect(caesar(plainText, 0)).toBe(cipherText);
  });
});

describe('anylize method', () => {
  test('right values for each property', () => {
    const analyzeResult = analyze([1, 8, 3, 4, 2, 6]);

    expect(analyzeResult.average).toBe(4);
    expect(analyzeResult.min).toBe(1);
    expect(analyzeResult.max).toBe(8);
    expect(analyzeResult.length).toBe(6);
  });
});
