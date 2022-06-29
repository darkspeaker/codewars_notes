// 7 kata
function balancedNum(number){
    const testStr = number.toString().split('')
    const middleIndex = Math.round((testStr.length - 1) / 2)
    const middle = testStr[middleIndex]
    if(number.toString().length === 1 || number.toString().length === 2){
        return "Balanced"
    }
    if(number.toString().length % 2 === 0){
        // console.log(middle, testStr[middleIndex - 1])
        let res = testStr.map((i, idx, array) => {
            if(i === middle && idx === middleIndex){
                // console.log(i)
                array[idx] = array[idx].replace(`${i}`, '+')
                return array[idx]                
            }
            else if(i === testStr[middleIndex - 1] && idx === middleIndex - 1){
                // console.log(i)
                array[idx] = array[idx].replace(`${i}`, '+')
                return array[idx]       
            }   
            else{
                return i
            }
        })
        console.log(res)
        let newStrTest1 = res.join("").split(`++`)[0].split("").map(i => +i).reduce((accamulator, currentValue) => accamulator + currentValue, 0)        
        let newStrTest2 = res.join("").split(`++`)[1].split("").map(i => +i).reduce((accamulator, currentValue) => accamulator + currentValue, 0)     
        console.log(newStrTest1, newStrTest2)
        if(newStrTest1 === newStrTest2){
            return "Balanced"
        }
        else{
            return "Not Balanced"
        }
    }
    else{
        let res = testStr.map((i, idx, array) => {
            if(i === middle && idx === middleIndex){
                array[idx] = array[idx].replace(`${i}`, '+')
                return array[idx]                
            }
            else{
                return i
            }
        })
        console.log(res)
        let newStrTest1 = res.join("").split(`+`)[0].split("").map(i => +i).reduce((accamulator, currentValue) => accamulator + currentValue, 0)        
        let newStrTest2 = res.join("").split(`+`)[1].split("").map(i => +i).reduce((accamulator, currentValue) => accamulator + currentValue, 0)     
        console.log(newStrTest1, newStrTest2)
        if(newStrTest1 === newStrTest2){
            return "Balanced"
        }
        else{
            return "Not Balanced"
        }
    }
}
// console.log(balancedNum(2))
// console.log(balancedNum(213))
console.log(balancedNum(9311531553))