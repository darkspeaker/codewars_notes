
let obj = {
  param: 'a',                  // parameter name for function in string  
  func: 'return a'  // function that need call with arg var
};
function runYourString (arg, obj) {
  let temp = obj.param
  obj.func = obj.func.replace( new RegExp(obj.param, 'g'), arg)
  console.log(obj)
  return new Function(obj.func)()
}
console.log(runYourString(123, obj))
