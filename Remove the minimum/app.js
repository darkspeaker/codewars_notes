function removeSmallest(numbers) {
  const findMinNum = Math.min(...numbers)
  const copyArr = Array.from(numbers)
  for(let i = 0; i < copyArr.length; i++) {
    if(copyArr[i] === findMinNum) {
      copyArr.splice(i, 1)
      break
    }
  }
  return copyArr
}

console.log(removeSmallest([1, 2, 3, 1, 4, 5]));


[
  335, 343, 306, 313, 236, 149, 290, 255, 311, 218
]

[
  335, 343, 306, 313, 236, 290, 255, 311, 218
]