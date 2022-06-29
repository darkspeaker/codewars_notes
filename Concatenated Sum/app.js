function checkConcatenatedSum(x, n) {
  let deterElem = x.toString().split("");
  if(x > 0){
    let res = deterElem.map(item => item.repeat(n)).map(i => +i).reduce((prev, curr) => prev + curr);
    if (res === x) {
        return true;
    } else {
        return false;
    }
  }
  else{
    let negDeterElem = x.toString().replace(/-/g,'').split("")
    let res = -negDeterElem.map(item => item.repeat(n)).map(i => +i).reduce((prev, curr) => prev + curr);
    if (res === x) {
        return true;
    } else {
        return false;
    }
  }
}
console.log(checkConcatenatedSum(-2997, 3));