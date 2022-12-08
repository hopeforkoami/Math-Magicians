import calculate from "../logic/calculate";

describe('test for calculations', () => {
  test('testing with the result  Button', () => {
    expect(calculate({
      total: 10,
      next: 5,
      operation: '+',
    }, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
  test('testing with the .  Button', () => {
    expect(calculate({
      total: '10',
      next: '5',
      operation: '+',
    }, '.')).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });
  test('testing with the AC  Button', () => {
    expect(calculate({
      total: '10',
      next: '5',
      operation: '+',
    }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
})
