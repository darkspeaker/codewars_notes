function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(item => {
    return typeof obj[item] === 'function'
  })
}


var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
  // no distributeGifts() and no goDownTheChimney()
};
// console.log(santa)

console.log(isSantaClausable(santa)) // must return TRUE
console.log(isSantaClausable(notSanta)) // must return FALSE