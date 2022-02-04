import Age from '../src/js/age-calculator';

describe('Age', () => {

  let testAge;

  beforeEach(() => {
    testAge = new Age(32);
  });

  test('should correctly return Earth years', () => {
    expect(testAge.earthYrs).toEqual(32);
  });

  test('should correctly return Mercury years', () => {
    expect(testAge.getMercuryYrs()).toEqual(133);
  });

  test('should correctly return Venus years', () => {
    expect(testAge.getVenusYrs()).toEqual(52);
  });

  test('should correctly return Mars years', () => {
    expect(testAge.getMarsYrs()).toEqual(17);
  });
  
  test('should correctly return Jupiter years', () => {
    expect(testAge.getJupiterYrs()).toEqual(3);
  });
});