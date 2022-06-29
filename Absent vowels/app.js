function absentVowel(x){
  let alphabet = ['a', 'e', 'i', 'o', 'u']
  let matchh = x.toLowerCase().match(/[aeiou]/g)
  return alphabet.findIndex( (item, idx) => matchh.indexOf(item) === -1)
}
console.log(absentVowel('John Doe hs seven red pples under his bsket'))
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'))