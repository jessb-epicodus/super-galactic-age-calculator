import Age from '.././src/js/calculator';
import Calculator from '.././src/js/calculator';

describe('Age', () => {

  let testAge;

  beforeEach(() => {
    testAge = new Age(32);
  });

  test('should correctly return Earth years', () => {
    expect(testAge.earthYrs).toEqual(32);
  });
  test('should correctly return Mercury years', () => {
    expect(testAge.getMercuryYrs()).toEqual(8);
  });
  test('should correctly return Venus years', () => {
    expect(testAge.getVenusYrs()).toEqual(20);
  });
});
