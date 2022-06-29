function calc(x){
    let str1 = x.split("").map(i => i.charCodeAt(0)).join("").split("").map(i => +i).reduce((prev, curr) => prev + curr)
    let str2 = x.split("").map(i => i.charCodeAt(0)).join("").replace(/7/g, '1').split("").map(i => +i).reduce((prev, curr) => prev + curr)
    return +str1 - +str2
}
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"))
