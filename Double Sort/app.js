function dbSort(a){
    a.map( (i,index,array) => typeof(i) === 'number' ? a.sort((a, b) => a - b) : a.sort())
    return a
}
// function dbSort(a){
//     return a.sort()
// }
console.log(dbSort([14, 32, 3, 5, 5]))