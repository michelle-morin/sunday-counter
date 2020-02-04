import { leapYear } from './../src/leapyear.js';

export function daysInYear(year) {
  var result = leapYear(year);
  if (result === true) {
    return 366;
  } else {
    return 365;
  }
};

export function startDayOfYear(year) {
  
}