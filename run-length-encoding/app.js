// var runLengthEncoding = function (str) {
//   let map = new Map();
//   for (let i = 0; i < str.length; i++) {
//     let el = str[i];
//     let elCount = 1;
//     if (map.has(el)) 
//     map.set(el, elCount);
//   }
//   const arr = Array.from(map).map(([name, value]) => [value, name]);
//   console.log(arr);
//   //  return arr
// };
// console.log(runLengthEncoding("hello world!"));



var runLengthEncoding = function (str) {
  return str.match(/(.)\1*/g).map(item => [item.length, item[0]])
}
console.log(runLengthEncoding("aab"));
// console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));