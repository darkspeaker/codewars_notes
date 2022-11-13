function reverseWords(str) {
  const convertToArr = str.split(' ')
  return convertToArr.map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

console.log(reverseWords('apple'))
console.log(reverseWords('double  spaced  words'))
console.log(reverseWords('a b c d'))
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))