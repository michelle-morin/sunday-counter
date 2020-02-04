export function leapYear(year) {
  if (year %4 != 0) {
    return false;
  } else {
    return true;
  }
};