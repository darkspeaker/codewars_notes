// 6 kata
function duplicateCount(text){
  text = text.replace(/\s/g, '').toLowerCase()
  const map = new Map()
  for(let i = 0; i < text.length; i++){
  let counter = 1
    const elem = text[i]
    if(map.has(elem) ){
      map.set(elem, counter++)
    }
    map.set(elem, counter)
  }
  console.log(map)
  let res = 0
  for(let [key, values] of map.entries()){
    console.log(key, values)
    if(values > 1 ){
      res++
    }
  }
  return res
}
// console.log(duplicateCount('aabbcde'))
// console.log(duplicateCount('Indivisibilities'))
console.log(duplicateCount('aabBcde'))