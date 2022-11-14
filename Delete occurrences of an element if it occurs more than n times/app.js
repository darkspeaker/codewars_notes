function deleteNth(arr, n){
  const cache = {}
  return arr.filter(function(item) {
    cache[item] = (cache[item] || 0) + 1
    return cache[item] <= n
  })
}

console.log(deleteNth([20,37,20,21], 1))
// console.log(deleteNth([20,37,20,21, 20], 2))