function removeEveryOther(arr){
    return arr.filter((item, index, array) => index % 2 === 0)
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Hello Againsdfasdf', 'asdf123']))