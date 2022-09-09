function validatePIN (pin) {
  const reg = /^\d*$/
  if(reg.test(pin)){
    if(pin.length === 4 || pin.length === 6){
      return true
    }
    else return false 
  }
  else return false
}


console.log(validatePIN("1")) //,false, "Wrong output for '1'")
console.log(validatePIN("12")) //,false, "Wrong output for '12'")
console.log(validatePIN("123")) //,false, "Wrong output for '123'")
console.log(validatePIN("1234")) //,false, "Wrong output for '123'")
console.log(validatePIN("12345")) //,false, "Wrong output for '12345'")
console.log(validatePIN("1234567")) //,false, "Wrong output for '1234567'")
console.log(validatePIN("-1234")) //,false, "Wrong output for '-1234'")
console.log(validatePIN("1.234")) //,false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234")) //,false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000")) //,false, "Wrong output for '00000000'")