function findOdd(A) {
    let obj = {};
    let arr = A;
    arr.forEach(function(x) { obj[x] = (obj[x] || 0)+1; });
    console.log(obj)
    for(let i in obj){
        // console.log(obj[i])
        if(obj[i] % 2 !== 0){
            // console.log(obj[i])
            return +i
        }
    }
}
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// 5 - 2
// 4 - 2
// 3 - 2
// 2 - 2
// 1 - 1
// 10 - 2
