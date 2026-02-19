const sumAll = function (numA, numB) {
  if (numA < 0 || numB < 0) return "ERROR";
  if (!Number.isInteger(numA) || !Number.isInteger(numB)) return "ERROR";

  let start = Math.min(numA, numB);
  let end = Math.max(numA, numB);
  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }
  
  return result;
};



// Do not edit below this line
module.exports = sumAll;
