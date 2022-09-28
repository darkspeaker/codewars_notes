function squareSum(numbers){
  if(!numbers.length) return 0
  return numbers.map(num => Math.pow(num, 2)).reduce((prevVal, curVal) => prevVal + curVal)
}

console.log((squareSum([1,2]))) //, 5))
console.log((squareSum([0, 3, 4, 5]))) //), 50);
console.log((squareSum([])))  //0);

// 3 = > 9 ; 4 => 16 ; 5 => 25; 