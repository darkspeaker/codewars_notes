function hyperReduce(reduceFunction, reduceInit) {
  // console.log(...arguments)
  let arr = Object.values(arguments).reduce((accam, val) => accam + val)
  return function(){
    let k = Object.values(arguments)
    return k + arr
  }
}
// console.log(hyperReduce(3)(3))
// console.log(hyperReduce(3,3,3)(3))
console.log(hyperReduce(3,3,3)([[3, 3]]))