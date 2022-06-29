function stray(numbers) {
 return +numbers.filter( numb => numbers.indexOf(numb) === numbers.lastIndexOf(numb)).join()
}

console.log(stray([1, 1, 2]))