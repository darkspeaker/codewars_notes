function iqTest(numbers){
    let arr = []
    //const delSpace = numbers.replace(/\s{1,}& {1-100}/g, ' ')
    //console.log(delSpace)
    //let k = numbers.replace(/\s/g, '')
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
        arr.push(numbers[i])
    }
    console.log(arr)
    //let arr = k.split("").


    // map( i => +i).filter( (i, k) => {
    //     if(i % 2 === 0){
    //         console.log(i, k)
    //     }
    //     else{
    //         console.log(i, k)
    //     }
    // })
    //console.log(arr)
    //console.log(k)
    return arr
}
console.log(iqTest("2 4 7 8 10"))




