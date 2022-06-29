// 7kata
String.prototype.isLetter = function () {
  return /^[a-z]{1}$/i.test(this);
};
console.log("1".isLetter());
console.log("a".isLetter());
console.log("X".isLetter());
console.log("7".isLetter());
console.log("*".isLetter());
console.log("/////////////");
console.log("abasdf".isLetter());
console.log("a\n".isLetter());
