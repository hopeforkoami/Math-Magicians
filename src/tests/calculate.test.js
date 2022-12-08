import calculate from '../logic/calculate';

describe('AC button', () => {
  test('Should return null', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});

describe('Number button', () => {
  test('If next is 0, should return empty object', () => {
    const obj = {
      total: 10,
      next: '0',
      operation: '+',
    };
    expect(calculate(obj, '0')).toEqual({});
  });
  test('If there is an operation, should return next', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    expect(calculate(obj, '5')).toEqual({
      total: 10,
      next: '55',
      operation: '+',
    });
  });
  test('If there is no operation, should return next and clear the value', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: null,
    };
    expect(calculate(obj, '5')).toEqual({
      next: '55',
      total: null,
    });
  });
});

describe('. button', () => {
  test('If next is not null, should return next', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '.')).toEqual({
      total: 10,
      next: '5.',
      operation: '+',
    });
  });
  test('If operation is not null, should return next', () => {
    const obj = {
      total: 10,
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '.')).toEqual({
      total: 10,
      next: '0.',
      operation: '+',
    });
  });
  test('If total is not null, should return next', () => {
    const obj = {
      total: '10.',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({});
  });
});

describe('= button', () => {
  test('Should return total', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
  test('If operation is null, should return empty object', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '=')).toEqual({});
  });
});

describe('+/- button', () => {
  test('If total is positive, should return negative', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: '-10',
      next: null,
      operation: null,
    });
  });
  test('If next is positive, should return negative', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: 10,
      next: '-5',
      operation: null,
    });
  });
  test('Else, should return empty object', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({});
  });
});
