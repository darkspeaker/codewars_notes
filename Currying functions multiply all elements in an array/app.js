// 7kata
function multiplyAll(arr){
    return function factor(n){
        return arr.map(i => i * n)
    }
}
console.log(multiplyAll([2, 3, 5])(2))