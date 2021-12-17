const sum = require('../sum');

describe('implementa soma', () => {
  test('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  
  test('Verifica se 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

