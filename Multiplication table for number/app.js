//kata 8
function multiTable(number) {
    let str = ''
    for(let i = 1; i <= 10; i++){
        str += `${i} * ${number} = ${i * number}\n`
    }
    return str.slice(0, -3)
}
console.log(multiTable(4))
console.log(multiTable(15))

let randStr = "strlqwe123"
randStr = randStr.slice(0, -3)
console.log(randStr)