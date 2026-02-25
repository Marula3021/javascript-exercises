const leapYears = function (year) {
  result = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? true : false ;
  return result;
};


//      Alternative solution without if 
// const leapYears = function (year) {
// return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Do not edit below this line
module.exports = leapYears;
