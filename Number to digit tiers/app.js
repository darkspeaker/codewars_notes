function createArrayOfTiers(num) {
    const con = num.toString().split('')
    res = con.reduce(( accamul, val, index) => {
      if(accamul.length === 0) accamul.push(val) 
      if(accamul.length > 0 && accamul[index - 1] ) accamul.push(accamul[index - 1] + val) 
      return accamul
    }, [])
    console.log(res)
}

console.log(createArrayOfTiers(2035))
// console.log(createArrayOfTiers(2035111233123123))


// function createArrayOfTiers(num) {
//   const arr = []
//   const convertNumToStr = num.toString()
//   console.log(convertNumToStr)
//   for(let i = 0; i < convertNumToStr.length; i++){
//     let item = convertNumToStr[i]
//     if(arr.length > 0) {
//       arr.push(arr[i - 1] + item)
//     }
//     if(arr.length === 0) arr.push(item)
//   }
// }

// console.log(createArrayOfTiers(2035))