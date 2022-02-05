import LifeExpectancy from '../src/js/life-expectancy-calculator';

describe('LifeExpectancy', () => {

  let testAge;

  beforeEach(() => {
    testAge = new LifeExpectancy(32);
  });

    test('should correctly return remaining Mercury years', () => {
    expect(testAge.getLifeExpectency()).toEqual("169 year(s) remaining");
  });
});