function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((prevVal, curVal) => prevVal + curVal, 0)
}


console.log(positiveSum([1,2,3,4,5])) //,15);
console.log(positiveSum([1,-2,3,4,5])) //,13);
console.log(positiveSum([])) //,0);
console.log(positiveSum([-1,-2,-3,-4,-5])) //,0);
console.log(positiveSum([-1,2,3,4,-5])) //,9);