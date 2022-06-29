function unluckyDays(year){
  let arr = []
  for(let i = 1; i <= 12; i++){
    const date = new Date(`${year}-${i}-13`)
    // console.log(console.log(date))
    if(date.getDay() === 5 && date.getDate() === 13){
      arr.push(date)
      console.log(console.log(date))
      console.log(date.getDay(), date.getDate(), date.getFullYear())
    }
  }
  return arr.length
}
console.log(unluckyDays(2120))
// console.log(unluckyDays(1986))