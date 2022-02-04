import Calculator from '.././src/js/calculator.js';

describe('Calculator', () => {

  let testAge;

  beforeEach(() => {
    testAge = new Age(32);
  });

  test('should correctly create object age', () => {
    expect(testAge.givenAge).toEqual(32);
  });
});