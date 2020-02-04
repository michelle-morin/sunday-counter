import { leapYear } from './../src/leapyear.js';

describe('leapYear', () => {

  test('should determine that a year is not a leap year when the year is not divisible by 4', () => {
    var result = leapYear(1993);
    expect(result).toEqual(false);
  });

  test('should determine that a year is a leap year when the year is divisible by 4', () => {
    var result = leapYear(2004);
    expect(result).toEqual(true);
  });
});