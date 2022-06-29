var Calculator = {
  average: function() {
    let arrArg = Object.values(arguments)
    if(arrArg.length === 0) return 0
    return arrArg.reduce( (accam, val) => accam + val) / arrArg.length
  } 
}

console.log(Calculator.average(3, 4, 5))