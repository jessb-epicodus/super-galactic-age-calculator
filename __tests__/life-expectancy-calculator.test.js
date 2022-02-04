import LifeExpectancy from '../src/js/life-expectancy-calculator';

describe('LifeExpectancy', () => {

  let testAge;

  beforeEach(() => {
    testAge = new LifeExpectancy(32);
  });

  test('should correctly return remaining Mercury years', () => {
    expect(testAge.getMercuryRemainigYrs()).toEqual(169);
  });

  test('should correctly return remaining Mercury years', () => {
    let oldAge = new LifeExpectancy(73)
    expect(oldAge.getMercuryRemainigYrs()).toEqual(2);
  });

  test('should correctly return remaining Venus years', () => {
    expect(testAge.getVenusRemainigYrs()).toEqual(65);
  });
  
  test('should correctly return remaining Venus years', () => {
    let oldAge = new LifeExpectancy(73)
    expect(oldAge.getVenusRemainigYrs()).toEqual(1);
  });

  test('should correctly return remaining Mars years', () => {
    expect(testAge.getMarsRemainigYrs()).toEqual(22);
  });

  test('should correctly return remaining Mars years', () => {
    let oldAge = new LifeExpectancy(73)
    expect(oldAge.getMarsRemainigYrs()).toEqual(0);
  });

  test('should correctly return remaining Jupiter years', () => {
    expect(testAge.getJupiterRemainigYrs()).toEqual(3);
  });

  test('should correctly return remaining Jupiter years', () => {
    let oldAge = new LifeExpectancy(73)
    expect(oldAge.getJupiterRemainigYrs()).toEqual(0);
  });
});