function nicknameGenerator(name){
  const str = /a|e|i|o|u/g
  const secLatter = name.slice(1, 2)
  const thirdLatter = name.slice(2, 3)
  console.log(secLatter.match(str))
  if(name.length < 4) return 'Error: Name too short'
  if(secLatter.match(str) && thirdLatter.match(str) === null){
    return name.slice(0, 3)
  }
  else if (secLatter.match(str) === null && thirdLatter.match(str)){
    return name.slice(0, 4)
  }
  else if( secLatter.match(str) && thirdLatter.match(str) ){
    return name.slice(0, 4)
  }
  else {
    return name.slice(0, 3)
  }
}
// console.log(nicknameGenerator('Jimmy'))
// console.log(nicknameGenerator('Samantha'))
// console.log(nicknameGenerator('Sam'))
// console.log(nicknameGenerator('Kayne'))
// console.log(nicknameGenerator('Melissa'))
// console.log(nicknameGenerator('James'))
// console.log(nicknameGenerator('Jeannie'))
console.log(nicknameGenerator('Gregory'))
console.log(nicknameGenerator('Azvkv'))