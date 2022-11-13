// Sum Numbers
function sum (numbers) {
  "use strict";
  if(!numbers.length) return 0
  return numbers.reduce((prevVal, currVal) => prevVal + currVal)
};

console.log(sum([1, 5.2, 4, 0, -1]))
console.log(sum([]))