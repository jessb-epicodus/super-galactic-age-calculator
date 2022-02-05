import LifeExpectancy from '../src/js/life-expectancy-calculator';

describe('LifeExpectancy', () => {

  let testAge;

  beforeEach(() => {
    testAge = new LifeExpectancy(32);
  });

  test('should correctly return remaining Mercury years', () => {
  expect(testAge.getMercuryRemainigYrs()).toEqual("169 year(s) remaining");
});

test('should correctly return remaining Mercury years', () => {
  let oldAge = new LifeExpectancy(73)
  expect(oldAge.getMercuryRemainigYrs()).toEqual("2 year(s) past expected");
});

test('should correctly return remaining Venus years', () => {
  expect(testAge.getVenusRemainigYrs()).toEqual("65 year(s) remaining");
});

test('should correctly return remaining Venus years', () => {
  let oldAge = new LifeExpectancy(73)
  expect(oldAge.getVenusRemainigYrs()).toEqual("1 year(s) past expected");
});

test('should correctly return remaining Mars years', () => {
  expect(testAge.getMarsRemainigYrs()).toEqual("22 year(s) remaining");
});

test('should correctly return remaining Mars years', () => {
  let oldAge = new LifeExpectancy(73)
  expect(oldAge.getMarsRemainigYrs()).toEqual("0 year(s) past expected");
});

test('should correctly return remaining Jupiter years', () => {
  expect(testAge.getJupiterRemainigYrs()).toEqual("3 year(s) remaining");
});

test('should correctly return remaining Jupiter years', () => {
  let oldAge = new LifeExpectancy(73)
  expect(oldAge.getJupiterRemainigYrs()).toEqual("0 year(s) past expected");
});
});