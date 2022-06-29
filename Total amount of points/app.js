function points(games) {
    let result = 0
    games.map(item => {
        item.split("")
        if(parseInt(item[0]) > parseInt(item[2])){
            result += 3
        }
        if(parseInt(item[0]) < parseInt(item[2])){
            result += 0
        }
        if(parseInt(item[0]) === parseInt(item[2])){
            result += 1
        }
    })
    return result
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))