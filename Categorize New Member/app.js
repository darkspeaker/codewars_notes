function openOrSenior(data){
  return data.map(item => {
    if(item[0] >= 55 && item[1] > 7){
      return 'Senior'
    }
    else {
      return 'Open'
    }
  })
}
console.log(openOrSenior([ [45, 12],[55,21],[19, -2],[104, 20] ]))