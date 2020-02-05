import { leapYear } from './../src/leapyear.js';

export function daysInYear(year) {
  var result = leapYear(year);
  if (result === true) {
    return 366;
  } else {
    return 365;
  }
}

// Makes an array in which each element is the day of the week that a year begins on, for years 1901-2000.
export function startDayOfYear() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var prevYearStart = 1;
  var firstDaysOfYears = [];

  for (var i=1901; i<2001; i++) {
    if (prevYearStart >= 0 && prevYearStart < 6) {
      prevYearStart += 1;
    } else if (prevYearStart === 6) {
      prevYearStart = 0;
    } 
    if (leapYear(i-1) === false) {
      var yearStart = days[prevYearStart];
      firstDaysOfYears.push(yearStart);
    } else if (leapYear(i-1)) {
      yearStart = days[prevYearStart + 1];
      firstDaysOfYears.push(yearStart);
    }

  }
  console.log(firstDaysOfYears);
  return firstDaysOfYears;
}