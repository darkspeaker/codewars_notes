function getAverage(marks){
  if(!marks.length) return 0
  return Math.floor(marks.reduce((prev, currVal) => prev + currVal) / marks.length)
}

console.log(getAverage([1,2,3,4,5]))