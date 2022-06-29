//6 kata
function count (string) {
  if(string === ""){
      return {}
  }
  string = string.split("")
  const st = string.reduce((accamulator, currentValue) => {
    if(!accamulator[currentValue]){
      accamulator[currentValue] = 0
    }
    accamulator[currentValue]++
    return accamulator
  }, {})
  return st
}
console.log(count("abarb"))
// const obj = {}
// obj.name = 'IVan'
// console.log(obj)