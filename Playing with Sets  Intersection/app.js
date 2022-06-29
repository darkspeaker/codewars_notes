// нахождения с 2 массивов одинаковые значения
function inter(s1, s2){
    // console.log(s1, s2)
    let arr1 = []
    let arr2 = []
    // let arrRes = []
    for(let value of s1){
        // console.log(value)
        arr1.push(value)
    }
    for(let value of s2){
        arr2.push(value)
    }
    let arrRes = arr1.filter(item => arr2.indexOf(item) >= 0)
    console.log(arrRes)
    let res = new Set(arrRes)
    console.log(res)
    return res
}
let A = new Set([1,2]), B = new Set([2,3]), C = new Set([2]), AB = inter(A,B);
console.log(inter(A, B))
console.log(AB)