import operate from '../logic/operate';

describe('tests for positive numbers', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('subtracts 2 - 1 to equal 1', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });
  test('multiplies 1 x 2 to equal 2', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  test('divides 4 ÷ 2 to equal 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  test('mod of 4 % 2 to equal 0', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});

describe('tests for negative numbers', () => {
  test('adds -1 + 2 to equal 1', () => {
    expect(operate(-1, 2, '+')).toBe('1');
  });
  test('subtracts 2 - -1 to equal 3', () => {
    expect(operate(2, -1, '-')).toBe('3');
  });
  test('multiplies -1 x 2 to equal 2', () => {
    expect(operate(-1, 2, 'x')).toBe('-2');
  });
  test('divides 4 ÷ -2 to equal -2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  test('mod of 4 % -2 to equal 0', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});

describe('tests for big.js', () => {
  test('adds 1.1 + 2.2 to equal 1', () => {
    expect(operate(1.1, 2.2, '+')).toBe('3.3');
  });
  test('subtracts 2.2 - 1.1 to equal 1.1', () => {
    expect(operate(2.2, 1.1, '-')).toBe('1.1');
  });
  test('multiplies 2 x 2.2 to equal 4.4', () => {
    expect(operate(2, 2.2, 'x')).toBe('4.4');
  });
  test('divides 4.4 ÷ 2.2 to equal 2', () => {
    expect(operate(4.4, 2.2, '÷')).toBe('2');
  });
  test('mod of 4.4 % 2.2 to equal 0', () => {
    expect(operate(4.4, 2.2, '%')).toBe('0');
  });
});

describe('tests for second number 0', () => {
  test('throws an error for division by 0', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('throws an error for mod by 0', () => {
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
