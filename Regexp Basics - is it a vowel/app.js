//7 kata
String.prototype.vowel = function () {
  return /^[aiuoe]{1}$/i.test(this);
};
console.log("asdf".vowel());
console.log("a".vowel());
console.log("E".vowel());
console.log("z".vowel());
console.log("lol".vowel());
