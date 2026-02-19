const leapYears = function (year) {
  let result = false;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};


//      Alternative solution without if 
// const leapYears = function (year) {
// return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Do not edit below this line
module.exports = leapYears;
