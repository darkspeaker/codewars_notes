function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const dateToday = new Date(currentDate)
  // console.log(dateToday.getTime())
  const end = new Date(expirationDate)
  // console.log(end.getTime())
  if(enteredCode === correctCode && dateToday.getTime() < end.getTime()){
    return true
  }
  else return false
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))