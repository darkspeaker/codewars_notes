// 6 kata
function nthFibo(n) {
    if(n <= 0) return 0
    let x = 0
    let summ = 0
    let fibArr = [0, 1]
    while(x < n){
        summ = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]
        fibArr.push(summ)
        x += 1
    }
    console.log(fibArr)
    return fibArr[n - 1]
}
console.log(nthFibo(3))

