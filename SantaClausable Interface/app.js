var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
  // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj) {
  for(let item in obj){
    // console.log(item)
    if(item === 'sayHoHoHo') return true
    
    if(obj.hasOwnProperty(item)){
      return true
    }
  }
}

console.log(isSantaClausable(santa))
console.log(isSantaClausable(notSanta))