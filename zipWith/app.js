function zipWith(fn,a0,a1) {
    let rezArr = []
    if(a0.length > a1.length){
        console.log(a0.length, a1.length)
        a0.length = a1.length  
        console.log(a0.length, a1.length)
        a0.map((item, index) => rezArr.push(fn(a0[index], a1[index])))
    }
    else if(a0.length < a1.length){
        console.log(a0.length, a1.length)
        a1.length = a0.length 
        a0.map((item, index) => rezArr.push(fn(a0[index], a1[index])))
    }
    else{
        a0.map((item, index) => rezArr.push(fn(a0[index], a1[index])))
        console.log(k)
    }
    console.log(rezArr)
    return rezArr
}   
const plus = (a, b) => a + b
// console.log(zipWith(plus, [0,1,2,3,4], [6,5,4,3,2,1]))
// console.log(zipWith(plus, [0,10,10,10], [0,1,2,3]))
console.log(zipWith(plus, [2.1295598471250443,
    5.185267732432162,
    1.558954221308766,
    3.9826366614240283,
    8.479135758473468,
    8.977009473230899,
    2.964857179777398], [5.704971470294438,
        5.43860218788782,
        4.930004361144706,
        1.509521993204832]))


// console.log(zipWith(Math.pow, [10,10,10,10], [0,1,2,3]))