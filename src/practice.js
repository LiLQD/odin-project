export function capitalize(s) {
  return s.toUpperCase();
}

export function reverseString(s) {
  return s.split('').reverse().join('');
}

export const calculator = (() => {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  return { add, subtract, multiply, divide };
})();

export function caesarCipher(str, shiftNumber) {
  return str
    .split('')
    .map((char) => shift(char, shiftNumber))
    .join('');
}

function shift(char, shiftNumber) {
  if (char < 'A' || char > 'z' || (char > 'Z' && char < 'a')) {
    return char;
  }
  if (shiftNumber > 26) {
    shiftNumber %= 26;
  }
  if (char >= 'A' && char <= 'Z') {
    return String.fromCharCode(
      ((char.charCodeAt(0) - 65 + shiftNumber) % 26) + 65
    );
  }
  if (char >= 'a' && char <= 'z') {
    return String.fromCharCode(
      ((char.charCodeAt(0) - 97 + shiftNumber) % 26) + 97
    );
  }
}

export function analyzeArray(arr) {
  return {
    average: arrAverage(arr),
    min: arr.sort(compare)[0],
    max: arr.sort(compare)[arr.length - 1],
    length: arr.length,
  };
}

function compare(a, b) {
  return a - b;
}
function arrAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
