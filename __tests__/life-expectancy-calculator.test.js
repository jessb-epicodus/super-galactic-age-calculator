import LifeExpectancy from '../src/js/life-expectancy-calculator';

describe('LifeExpectancy', () => {

  let testAge;

  beforeEach(() => {
    testAge = new LifeExpectancy(32);
  });

  test('should correctly return remaining years', () => {
    expect(testAge.getLifeExpectancy()).toEqual(41);
  });
  test('should correctly return remaining years', () => {
    let oldAge = new LifeExpectancy(73)
    expect(oldAge.getLifeExpectancy()).toEqual(0);
  });
});