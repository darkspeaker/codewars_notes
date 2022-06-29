var FilterString = function(value) {
  let arr = value.split("").map(i => +i).filter(i => !isNaN(i)).join("")
  return +arr
}
console.log(FilterString("a1b2c3"))