function pigIt(str){
  const toArr = str.split(' ')
  const res = toArr.map(item => {
    const FirstLetter = item.slice(0, 1)
    if(item.match(/\w/)){
      item = item.slice(1) + FirstLetter + 'ay'
    }
    return item
  }).join(' ')
  return res
}

console.log(pigIt('Pig latin is cool !')) //'igPay atinlay siay oolcay')
console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay')