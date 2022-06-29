// 7 kata
function findSum(n) {
  const listNum = []
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 || i % 5 === 0){
      listNum.push(i)
    }
  }
  return listNum.reduce((prevVal, currentVal) => prevVal + currentVal) 
}

console.log(findSum(100))