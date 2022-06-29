function twoSum(numbers, target) {
  if(numbers.length > 1){
      for(let indx = 0; indx < numbers.length; indx++){
        const item = numbers[indx]
        for(let i = indx + 1; i < numbers.length; i++){
          if(item + numbers[i] === target){
            return [indx, i]
          }
        }
      }
  }
}

// console.log(twoSum([1,2,3], 4))
// console.log(twoSum([2,2,3], 4))
console.log(twoSum([1234,5678,9012], 14690))
//[1,2,3], 4
// [1234,5678,9012], 14690)
// [2,2,3], 4