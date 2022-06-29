function validPass(password){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/
    let k = regex.test(password)
    console.log(k)
    k ? k = "VALID" : k = "INVALID"
    return k
}
// console.log(validPass('Username123'))
// console.log(validPass('Username'))
// console.log(validPass('1Username'))
// console.log(validPass('123'))
console.log(validPass('a12'))
// console.log(validPass('Username123!'))
// console.log(validPass('ThisPasswordIsTooLong1234'))
