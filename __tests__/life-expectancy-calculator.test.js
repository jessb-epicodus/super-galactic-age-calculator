import LifeExpectancy from '../src/js/life-expectancy-calculator';

describe('LifeExpectancy', () => {

  let testAge;

  beforeEach(() => {
    testAge = new LifeExpectancy(32);
  });

  test('should correctly return life expectancy in years', () => {
    expect(testAge.getLifeExpectancy()).toEqual(40);
  });
});