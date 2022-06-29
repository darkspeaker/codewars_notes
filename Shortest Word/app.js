function findShort(s){
    let ks = s.split(" ").map(i => i.length)
    //return Math.min.apply(null, ks)
    return Math.min(...ks)
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))