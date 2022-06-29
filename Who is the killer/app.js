function killer(suspectInfo, dead) {
    let killerBi = ""
    for(let item in suspectInfo){
        suspectInfo[item].filter((i, index) =>  {
            if(i === dead[index]){
                killerBi = item
            }
        })
    }
    return killerBi
}
console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))
console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))