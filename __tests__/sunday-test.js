import { leapYear } from './../src/leapyear.js';

describe('leapYear', () => {

  test('should determine that a year is not a leap year when the year is not divisible by 4', () => {
    var year = 1993;
    var result = leapYear(year);
    expect(result).toEqual(false);
  });
});