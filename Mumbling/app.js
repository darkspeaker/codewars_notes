function accum(s) {
    return s.split("").map((item, index, array) => item.repeat(index + 1).toLowerCase()).map(item => item.charAt(0).toUpperCase() + item.substr(1)).join("-")

}
console.log(accum("ZpglnRxqenU"))