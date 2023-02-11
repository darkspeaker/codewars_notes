// const reverseSeq = n => {
//   const arr = []
//   while(n > 0){
//     arr.push(n)
//     n -= 1
//   }
//   return arr
// };
const reverseSeq = n => new Array(n).fill().map(item => n--);

console.log(reverseSeq(5))