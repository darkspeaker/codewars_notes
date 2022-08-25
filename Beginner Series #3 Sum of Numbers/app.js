function getSum(a,b){
  if (a > b) [a, b] = [b, a]
  console.log(a, b)
  let summ = 0

   for(let i = a; i <= b; i++){
     summ += i
   }
  return summ
}


console.log(getSum(0,-1)) // -1
console.log(getSum(0,1)) // 1