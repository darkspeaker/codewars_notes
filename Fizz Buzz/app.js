//7 kata
// Return an array
function fizzbuzz(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    const res = arr.map((item, index) => {
        if(item % 5 === 0 && item % 3 === 0){
            item = item + ''
            return item.replace(`${item}`, 'FizzBuzz')
        }
        if(item % 3 === 0){
            item = item + ''
            return item.replace(`${item}`, 'Fizz')
        }
        if(item % 5 === 0){
            item = item + ''
            return item.replace(`${item}`, 'Buzz')
        }
        if(item !== undefined){
            return item
        }
    })
    return res
}
console.log(fizzbuzz(100))