function descendingOrder(n){
    return +n.toString().split('').map(i => +i).sort((a, b) => b - a).join("")
}
console.log(descendingOrder(444412315))
console.log(typeof (descendingOrder(444412315)))