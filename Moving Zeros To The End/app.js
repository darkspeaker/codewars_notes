function moveZeros(arr) {
  const listZero = arr.filter(i => i === 0)
  arr = arr.filter(i => i !== 0)
  arr.push(...listZero)
  return arr
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))