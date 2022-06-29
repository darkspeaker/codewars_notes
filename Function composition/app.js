const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const compose = (...arg) => x => arg.reduceRight((acc, fn) => fn(acc), x)
console.log(compose(multTwo, addOne)(5))
console.log(compose(addOne, multTwo, addOne, addOne)(2))