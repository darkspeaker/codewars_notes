function myLanguages(results) {
  const arr = Object.entries(results)
  return arr.filter(item => item[1] >=  60).sort((a, b) => b[1] - a[1]).map(item => item[0])
}
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))