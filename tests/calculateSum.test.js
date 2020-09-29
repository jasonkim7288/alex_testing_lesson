const { calculateSum } = require ('../source/calculateSum')

describe('calc input func', () => {
  test('should only accept an arry', () => {
    expect(() => {
      calculateSum([1, 2, 3, 4]);
    }).not.toThrow();

    expect(() => {
      calculateSum("hello", "world");
    }).toThrow();

    expect(() => {
      calculateSum();
    }).toThrow();

    expect(() => {
      calculateSum(1, 2);
    }).toThrow();
  });

});