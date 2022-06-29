// function maskify(cc) {
//   // console.log(cc.length)
//   if(cc.length <= 4) return cc
//   // console.log(cc[cc.length - 4])
//   const lastFourLetters = cc.slice(cc.length - 4, cc.length)
//   // console.log(lastFourLetters)
//   cc = cc.split('')
//   console.log(cc, '//////', cc.length)
//   cc.length = cc.length - 4
//   console.log(cc.length)
//   cc = cc.map(number => number = '#').join('')
//   console.log(cc.length)
//   return cc + lastFourLetters

//   // console.log(lastFourLetters)
// }
// console.log(maskify('25345'))
console.log(maskify('4556364607935616'))
// console.log('4556364607935616'.length)
// console.log(maskify('11111'))
// console.log(maskify('1'))







//
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}