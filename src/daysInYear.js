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
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var prevYearStart = 1;
  var firstDaysOfYears = [];
  for (var i=1901; 1<2001; i++) {
    if (leapYear(i-1) === false) {
      var yearStart = days[prevYearStart + 1];
      firstDaysOfYears.push(yearStart);
      prevYearStart++;
    } else if (leapYear(i-1)) {
      yearStart = days[prevYearStart + 2];
      firstDaysOfYears.push(yearStart);
      prevYearStart++;
    }
  }
return firstDaysOfYears[0];
};