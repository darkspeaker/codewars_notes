//7 kata
function processArray(arr, callback) {
    const arrRes = []
    for(let i = 0; i < arr.length; i++){
        arrRes.push(callback(arr[i]))
    }
    return arrRes
}
var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray, function (a) {
    return a * 4;
});
console.log(myArray);

// let myArray = [4, 8, 2, 7, 5];
// myArray = processArray(myArray,function (a) {
//     return myArray.map(i => i * a)
//   });

//console.log(myArray)

// function ebu(a, b){
//     let arr = []
//     arr = Array(5).fill(null).map(() => Math.floor(Math.random() * 30) - 5).sort((a, b) => b - a)
//     return arr
// }
// console.log(ebu())
