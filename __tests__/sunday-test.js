import { leapYear } from './../src/leapyear.js';
import { daysInYear, startDayOfYear } from './../src/daysInYear.js';

describe('leapYear', () => {

  test('should determine that a year is not a leap year when the year is not divisible by 4', () => {
    var result = leapYear(1993);
    expect(result).toEqual(false);
  });
  test('should determine that a year is a leap year when the year is divisible by 4', () => {
    var result = leapYear(2004);
    expect(result).toEqual(true);
  });
  test('should determine a year is not a leap year if the year is divisible by 100', () => {
    var result = leapYear(1900);
    expect(result).toEqual(false);
  });
  test('should determine that a year is a leap year if it is divisible by 400', () => {
    var result = leapYear(2000);
    expect(result).toEqual(true);
  });
});

describe('daysInYear', () => {

  test('should return number of days in any year', () => {
    var numDays = daysInYear(1900);
    expect(numDays).toEqual(365);
  });
});

describe('startDayOfYear', () => {

  test('should return start day of a year', () => {
    var day = startDayOfYear(1901);
    expect(day).toEqual("Tuesday");
  });
});