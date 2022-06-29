function findOutlier(integers){
    let findOutlier = integers.filter(i => i % 2 === 0)
    if(findOutlier.length === 1){
        return findOutlier[0]
    }
    else{
        return integers.filter(i => i % 2 !== 0)[0]
    }
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))