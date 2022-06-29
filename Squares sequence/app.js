function squares(x, n) {
    let powArr = [x]
    if(n > 0){
        while(powArr.length < n){
            let k = Math.pow(powArr[powArr.length - 1], 2)
            powArr.push(k)
            console.log(x)
            x += 1
        }
    }
    else{
        return []
    }
    console.log(powArr)
    return powArr
}
squares(10, 4)