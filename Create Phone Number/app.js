function createPhoneNumber(numbers){
  const str = numbers.join('')
  const code = str.slice(0,3)
  const secPart = str.slice(3, 6)
  const thirdPart = str.slice(6, 10)
  return `(${code}) ${secPart}-${thirdPart}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))