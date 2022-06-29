function sortByBit1(arr) {
  let obj = {}
  arr.map( (item, idx, arr) => {
    let temp = [...item.toString(2).replace(/0/g, '')]
    obj[`${item.toString(2)}`] = temp.join('')
  })
  console.log(obj)
  let tt = Object.entries(obj)
  console.log(tt)
  tt.sort( (a, b) => +a[1] - +b[1] )
  console.log(tt)
  let sortEl = []
  for(let i = 0; i < tt.length; i++){
    const el = tt[i]
    // console.log(el)
    sortEl.push(el[0])
  }

  sortEl = sortEl.map(item => parseInt(item, 2))
  return sortEl
}
console.log(sortByBit1([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]))

// function sortByBit(arr) {
//   let obj = {}
//   return arr.reduce( (accam, currVal, arr) => {
//     let temp = [...currVal.toString(2).replace(/0/g, '')]
//     obj[`${currVal.toString(2)}`] = temp.join('')
//     let tt = Object.entries(obj)
//     // console.log(tt)
//     tt.sort( (a, b) => +a[1] - +b[1] )
//     // console.log(tt)
//     let sortEl = []
//     for(let i = 0; i < tt.length; i++){
//       const el = tt[i]
//       // console.log(el)
//       sortEl.push(el[0])
//     }
//     sortEl = sortEl.map(item => parseInt(item, 2))
//     return sortEl
//   }, [])
// }
// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))



// .replace(/0/g, '')
// .map(Number).sort((a, b) => a - b).map(item => parseInt(item, 2))