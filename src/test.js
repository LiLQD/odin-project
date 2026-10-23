import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './practice.js';
test('capitalize', () => {
  expect(capitalize('lilqd')).toMatch('LILQD');
});

test('reverse string', () => {
  expect(reverseString('lilqd')).toMatch('dqlil');
});

test('calculator', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.multiply(2, 1)).toBe(2);
});

test('Caesar cipher', () => {
  expect(caesarCipher('Hello LiLQD!', 3)).toMatch('Khoor OlOTG!');
});

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
