//7kata
function squareDigits(num) {
    return +num.toString().split("").map(i => Math.pow(Number(i), 2)).join("")
}
console.log(squareDigits(9119))
