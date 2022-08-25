function digitalRoot(n) {
  const toStr = n.toString()
  console.log(toStr)
  const toArr = toStr.split('')
  console.log(toArr)
  const summ = toArr.reduce( (item, prevItem) => {
    return +item + +prevItem
  })
  console.log(summ)
  console.log(summ.toString().length)
  if(summ.toString().length > 1) return digitalRoot(summ)
  else return summ
}

// console.log( digitalRoot(16)) //, 7 )
console.log( digitalRoot(456) ) //, 6 )