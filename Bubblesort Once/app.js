function bubblesortOnce(arr) {
  const res = [...arr]
  let endI = res.length - 1
  for (let i = 0; i < endI; i++) {
    let swap = res[i]
    if(res[i] > res[i + 1]){
      res[i] = res[i + 1]
      res[i + 1] = swap
    }
  }
  return res
}
// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])) // [7, 5, 3, 1, 2, 4, 6, 8, 9]
console.log(bubblesortOnce([2, 4, 1]))