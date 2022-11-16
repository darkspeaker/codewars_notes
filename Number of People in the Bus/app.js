var number = function(busStops){
  let count = 0
  busStops.forEach(item => count += item[0] )
  busStops.forEach(item => count -= item[1])
  return count
}

console.log(number([[10,0],[3,5],[5,8]]))