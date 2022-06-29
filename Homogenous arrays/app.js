function filterHomogenous(arrays) {

  return arrays.map( (arrElem, idx , arr) => arrElem.length > 0 && arrElem.every( (val, i, arra) => typeof val === typeof arra[0]) ? arrElem : '' ).filter(i => i !== '')
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))