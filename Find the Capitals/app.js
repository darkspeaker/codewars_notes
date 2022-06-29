function capital(capitals){
    let arr = []
    for(let i  of capitals){
        i.state ? arr.push(`The capital of ${i.state} is ${i.capital}`) : arr.push(`The capital of ${i.country} is ${i.capital}`)
    }
    return arr
}
const mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', capital : "Madrid"}]
capital(mixed_capitals)
console.log(capital(mixed_capitals)[1])