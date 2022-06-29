function fridayTheThirteenths(start, end) {
    let res = ''
    if(end){
        let dateStart = `${start}.01.01 02:00:00`
        let dateEnd = `${end+1}.01.01 02:00:00`
        let dateStObject = new Date(dateStart)
        let dateEndObject = new Date(dateEnd)
        let mlDateSt = Date.parse(dateStObject)
        let mlDateEnd = Date.parse(dateEndObject)
        let arr = []
        for(let i = mlDateSt; i <= mlDateEnd; i = i + 24 * 60 * 60 * 1000){
          arr.push(new Date(i))
        }
        arr.map(item => {
          let findFriday = item.getDay()
          let find13 = item.getDate()
          let findMonth = item.getMonth() + 1
          let findYear = item.getFullYear()
      if(findFriday === 5 && find13 === 13){
        res += `${findMonth}/${find13}/${findYear} ` 
      }
    })
    }
    else{
        let dateStart = `${start}.01.01 02:00:00`
        let dateEnd = `${start}.12.31 02:00:00`
        let dateStObject = new Date(dateStart)
        let dateEndObject = new Date(dateEnd)
        let mlDateSt = Date.parse(dateStObject)
        let mlDateEnd = Date.parse(dateEndObject)
        let arr = []
        for(let i = mlDateSt; i <= mlDateEnd; i = i + 24 * 60 * 60 * 1000){
          arr.push(new Date(i))
        }
    arr.map(item => {
        let findFriday = item.getDay()
        let find13 = item.getDate()
        let findMonth = item.getMonth() + 1
        let findYear = item.getFullYear()
        if(findFriday === 5 && find13 === 13){
            res += `${findMonth}/${find13}/${findYear} ` 
        }
    })
    }
    return res.slice(0, -1)
  }