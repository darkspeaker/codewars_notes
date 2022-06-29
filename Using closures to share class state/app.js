var Cat = (function () {
  let arr = []
  function Cat(name, weight){
    let _name = name
    let _weight = weight
    if(name && weight){
      Object.defineProperty(this,'name', {
        get: function(){return _name}, 
        set: function(value){
          _name = value
        }
      });
      Object.defineProperty(this,'weight',{
        get: function(){return _weight},
        set: function(value){
          arr = arr.join().replace(weight , value).split(',').map(i => +i)
          _weight = value
        }
      });
      arr.push(this.weight)
    }
    else{
      throw new Error('error her')
    }
  }
  Cat.averageWeight = function(){
    // console.log(arr)
    const summ = arr.reduce( (prev, current) => prev + current)
    return summ / arr.length
  }
  return Cat
}());

let jarvis = new Cat('jarvis', 15)
let curt = new Cat('curt', 35)
let berrr = new Cat('berrr', 10)
let kily = new Cat('kily', 15)

// let bert = new Cat('bert', 10)
// let fill = new Cat('fill', 15)
console.log(Cat.averageWeight())
jarvis.weight = 20
// console.log(curt.weight)
console.log(Cat.averageWeight())



// [ 15, 35, 10, 15 ]

// [ 15, 35, 10, 20 ]