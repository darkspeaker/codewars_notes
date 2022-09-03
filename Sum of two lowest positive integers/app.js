function sumTwoSmallestNumbers(numbers) {  
  const res = numbers.sort((a, b) => a - b)
  console.log(res)
  return  res[0] + res[1]
}


// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //, 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([210, 52, 99, 86, 33])) //, 13 , "Sum should be 13");
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //, 6 , "Sum should be 6");
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) //, 10 , "Sum should be 10");
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) //, 24 , "Sum should be 24");
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) //, 16 , "Sum should be 16");