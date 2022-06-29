function divCon(x){
    let sumIntegers = x.filter(item => item === +item)
    if(sumIntegers.length === 0){
        sumIntegers = 0
    }
    else{
        sumNonItegers = sumIntegers.reduce((prev, curr) => prev + curr)
    }
    let sumNonItegers = x.filter(item => item === String(item))
    if(sumNonItegers.length === 0){
        sumNonItegers = 0
    }
    else{
        sumNonItegers = sumNonItegers.map(i => +i).reduce((prev, curr) => prev + curr)
    }
    console.log(sumIntegers, sumNonItegers)
    return sumIntegers - sumNonItegers
}
console.log(divCon([4,2]))