function countPositivesSumNegatives(input) {
  if(!input || !input.length) return [] 
  let countPositiveNums = 0
  let summNegativeNums = 0
  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      countPositiveNums += 1
    }
    else{
      summNegativeNums += input[i]
    }
  }
  return [countPositiveNums, summNegativeNums]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))