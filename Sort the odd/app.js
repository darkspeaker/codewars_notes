// 6 kata +
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const copyArr = array.slice()
  if(!array.length) return []
  const arr = []
  copyArr.forEach((item, idx) => {
    if(Math.abs(item) % 2 === 1) arr.push({currentNum: item, currentIndex: idx})
  })
  arr.sort((a, b) => a.currentNum - b.currentNum)
  copyArr.forEach((item, idx) => {
    if(Math.abs(item) % 2 === 0) arr.push({currentNum: item, currentIndex: idx})
  })
  arr.forEach( (elem, idx) => {
    if(Math.abs(elem.currentNum) % 2 !== 1){
      const fromIndex = idx
      const toIndex = arr[fromIndex].currentIndex
      const element = arr.splice(fromIndex, 1)[0]
      arr.splice(toIndex, 0, element)
    }
  })
  return arr.map(item => item.currentNum)
}
// console.log(sortArray([6, 5, 3, 2, 8, 1, -3, 4]))
console.log(sortArray([5, 3, 23, 2, 1, 8, 0, -5]))
// console.log(sortArray([-18,  50, -26,  29,   2, 30,  10,  25, -13, -30, -44, -43,  29, -44]))

// [ -18, 50, -26, -43, 2, 30, 10, -13, 25, -30, -44, 29, 29, -44 ]
