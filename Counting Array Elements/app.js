
function count(array){
    let obj = {}
    array.forEach(item => obj[item] = (obj[item] || 0) + 1)
    return obj
}
console.log(count(['a', 'a', 'b', 'b', 'b']))
// count(['a', 'a', 'b', 'b', 'b'])