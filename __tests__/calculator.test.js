import Calculator from '.././src/js/calculator';

describe('Age', () => {

  let testAge;

  beforeEach(() => {
    testAge = new Age(32);
  });

  test('should correctly return years', () => {
    expect(testAge.years).toEqual(32);
  });
});