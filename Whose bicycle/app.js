const first = {
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}
const second = {
  'algebra': 8,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}
const third = {
  'algebra': 6,
  'history': 10,
  'physics': 10,
  'geography': 10,
  'chemistry': 10
}


//
const first1 = {
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}
const second1 = {
  'algebra':6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}
const third1 = {
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}


function whoseBicycle(diary1, diary2, diary3) {
  // let arr = [diary1, diary2, diary30]
  let first = Object.values(diary1).reduce( (accam, val) =>  accam + val) / Object.values(diary1).length

  let second = Object.values(diary2).reduce( (accam, val) => accam + val ) / Object.values(diary2).length


  let third = Object.values(diary3).reduce( (accam, val) => accam + val ) / Object.values(diary3).length

  console.log(first, second, third)

  let ageTable = {
    'third': third,
    'second': second,
    'first': first,
  }

  const valueArr =  Math.max(... Object.values(ageTable))
  for(let item in ageTable){
    if(ageTable[item] === valueArr){
      return `I need to buy a bicycle for my ${item} son.`
    }
  }
}
console.log(whoseBicycle(first1, second1, third1))