function catMouse(map,moves){
    let str = map.split("\n")
    let findCatIndexRow
    let findCatIndexColumn
    let findMouseIndexRow
    let findMouseIndexColumn
    let res = ""
    
    // console.log(str)
    str.map((item, index) => {
        // console.log(item.length)
        // console.log(item)
        item = item.split("")
        item.map( (step, stepIndex) => {
            if(step === 'C'){
                findCatIndexRow = stepIndex + 44
                findCatIndexColumn = index + 1
            }
            else if(step === 'm'){
                // console.log(stepIndex, index)
                findMouseIndexRow = stepIndex + 1
                findMouseIndexColumn = index + 1
            }
        })
    })
    // console.log(findCatIndexColumn, findCatIndexRow)
    // console.log(findMouseIndexColumn, findMouseIndexRow)
    console.log(findCatIndexColumn, findMouseIndexColumn)
    if(findCatIndexColumn >= findMouseIndexColumn ){

        for(let i = findMouseIndexColumn; i <= findCatIndexColumn; i++){
            let kk = findCatIndexColumn - moves
            console.log(kk)
            if(findCatIndexColumn - moves <= findMouseIndexColumn){
                if(findCatIndexRow >= findMouseIndexRow){
                    for(let i = findMouseIndexRow; i <= findCatIndexRow; i++){
                        console.log("her")
                        if(findCatIndexRow - moves >= findMouseIndexRow){
                            return 'Caught!'
                        }
                        else{
                            return 'Escaped!'
                        }
                    }
                    break
                }
                else{
                    for(let i = findCatIndexRow; i <= findMouseIndexRow; i++){
                        if(findMouseIndexRow - moves >= findCatIndexRow){
                            return 'Caught!'
                        }
                        else{
                            return 'Escaped!'
                        }
                    }
                    break
                }
            }
            else{
                return 'Escaped!'
            }
            break
        }
    }
    // if(findMouseIndexColumn - (findCatIndexColumn + moves) >= 0  || findMouseIndexColumn + (findCatIndexColumn + moves) >= 0){
    //     console.log(findMouseIndexRow, findCatIndexRow)
    //     if(findMouseIndexRow - (findCatIndexRow + moves) >= 0 || findMouseIndexRow + (findCatIndexRow + moves) >= 0){
    //         return 'Caught!'
    //     }
    // }
    // else{
    //     return 'Escaped!'
    // } 
    return res
}
var map=
`m.......
........C
.........`


// var map=
// `.m.......
// .........
// .........
// .........
// .........
// .........
// .........
// .......C.`

// var map=
// `.C.......
// .........
// ......m..`
// var map =
// `..C......
// .........
// ....m....`
console.log(catMouse(map, 5))