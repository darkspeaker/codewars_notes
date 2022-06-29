var validWord = function(dictionary, word) {
  let sumDict = dictionary.reduce((prev, accam) => prev + accam)
  // console.log(sumDict)
  // let reg = new RegExp(word)
  // let reg = /(?=([codewars]+))\1/g
  if( word.length >= sumDict.length){
    let te = '(([' + word + ']+))'
    console.log(te)
    let reg = new RegExp(te) 
    // console.log( reg.test(sumDict) )
    console.log( sumDict.match(reg) )
  }


};
// console.log(validWord(["code", "wars"], "codewars"))
// console.log(validWord(['wars', 'code'], "codewars"))
// console.log(validWord(['wars', 'code'], "codewars"))
console.log(validWord( ['a', 'b', 'c', 'd', 'e', 'f'] , "abcdefg"))