function smallEnough(a, limit){
  const flag = []
  a.forEach(item => item <= limit ? flag.push(true) : flag.push(false))
  return flag.every(item => item === true)
}

console.log(smallEnough([66, 101], 200))