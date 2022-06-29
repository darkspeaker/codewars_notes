// 6kyu
function tickets(peopleInLine) {
  let moneyForCharge25 = []
  let moneyForCharge50 = []
  let moneyForCharge100 = []
  let flag = 'YES'
  for (let i = 0; i < peopleInLine.length; i++) {
    let el = peopleInLine[i];
    console.log(el)
    switch(el){
      case 25: 
        moneyForCharge25.push(el)
        break
      case 50:
        moneyForCharge50.push(el)
        if(moneyForCharge25.length > 0){
          moneyForCharge25.pop()
        }
        else{
          return 'NO'
        }
        break
      case 100:
        moneyForCharge100.push(100)
        if(moneyForCharge25.length > 0 && moneyForCharge50.length > 0){
          moneyForCharge25.pop()
          moneyForCharge50.pop()
        }
        else if(moneyForCharge25.length >= 3){
          moneyForCharge25.length = moneyForCharge25.length - 3
        }
        else{
          return 'NO'
        }
        break  
    }
    console.log('==============================')
    console.log(`moneyForCharge25:`, moneyForCharge25);
    console.log(`moneyForCharge50:`, moneyForCharge50);
    console.log(`moneyForCharge100:`, moneyForCharge100);
  }
  return flag
}
// console.log(tickets([25, 25, 25, 50, 25])) // 
// console.log(tickets([25,25,25,25,25,25,25,50,50,50,100,100,100,100])) // no
console.log(tickets([25,25,25,100,25,25,25,100,25,25,25,100,100,25])) // no

// console.log(tickets([25,100])) // no
// console.log(tickets([25,25,50,50])) // yes
// console.log(tickets([25,25,25,100,25,25,25,100,25,25,50,100,25,25,25,100,25,25,25,100,25,50,50,100])) // no
// console.log(tickets([50,50,50,50,50,50,50,50,50,50])) // no
// console.log(tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,50,50,50])) // no
// console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100])); // yes

// 25, 25, 25 => 75 , + 25 => 100 - 75 => 25 , 25, 25, => 75 + 25 => 100 - 75 => 25 + 25 + 25 + 25
