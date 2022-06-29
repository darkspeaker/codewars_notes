function arrowArea(a,b) {
    let sq = Math.pow(a, 2) + Math.pow(b, 2)
    console.log(sq)
    console.log(Math.sqrt(sq))
    sq = Math.sqrt(sq) / 2
    console.log(sq)

    let sec = Math.pow(sq, 2) - (Math.pow(a, 2) / 4)
    console.log(sec)
    let res = Math.round((a * Math.sqrt(sec)) / 2, 3) 
    console.log(res)
    return res
}
arrowArea(7, 6)
