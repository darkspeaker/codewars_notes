var capitals = function (word) {
  const arr = word.split('')
  return arr.map((item, index) => {
      if(item === item.toUpperCase()){
          return index
      }
  }).filter(item => item !== undefined)
}

console.log(capitals('CodEWaRs'))