var maxRedigit = function(num) {
  if(num <= 0 || num.toString().length !== 3) return null
  const options = num.toString().split('')
  const variations = new Set(options)
  for (i = 2; i <= options.length; i++) {
    options.forEach(o => 
      variations.forEach(v => {
       if (v.indexOf(o) !== -1) return
       variations.add(`${v}, ${o}`) 
      })
    )
  }
  const arr = [...variations]
  let maxLng = Math.max(...arr.map( elem => elem.length))
  console.log(maxLng)
  const newArr = arr.filter(elem => elem.length === maxLng).map(item => item = item.replace( /[\D]/g, '')).map(Number)
  console.log(newArr)
  return Math.max(...newArr)
};
console.log(maxRedigit(21))