// principal - основний
// interest - відсоток
// tax - податок
//  desired - бажаний

function calculateYears(principal, interest, tax, desired) {
    //1000 + (1000 * 0.05 * 0.18)
    let year = 0
    if (principal === desired) return year
    while(principal <= desired ){
        principal = principal + (principal * interest * (1 - tax))
        year += 1 
        // console.log(principal)
    }
    return year
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))