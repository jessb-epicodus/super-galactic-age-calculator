import LifeExpectancy from '../src/js/life-expectancy-calculator';

describe('LifeExpectancy', () => {

  let testAge;

  beforeEach(() => {
    testAge = new LifeExpectancy(32);
  });

  // test('should correctly return remaining years', () => {
  //   expect(testAge.getLifeExpectancy()).toEqual(41);
  // });
  // test('should correctly return remaining years', () => {
  //   let oldAge = new LifeExpectancy(73)
  //   expect(oldAge.getLifeExpectancy()).toEqual(0);
  // });
  test('should correctly return remaining Mercury years', () => {
    expect(testAge.getMercuryRemainigYrs()).toEqual(169);
  });
  test('should correctly return remaining years', () => {
    let oldAge = new LifeExpectancy(73)
    expect(oldAge.getMercuryRemainigYrs()).toEqual(2);
  });
  test('should correctly return remaining Venus years', () => {
    expect(testAge.getVenusRemainigYrs()).toEqual(65);
  });
  test('should correctly return remaining Mars years', () => {
    expect(testAge.getMarsRemainigYrs()).toEqual(22);
  });
  test('should correctly return remaining Jupiter years', () => {
    expect(testAge.getJupiterRemainigYrs()).toEqual(3);
  });
});