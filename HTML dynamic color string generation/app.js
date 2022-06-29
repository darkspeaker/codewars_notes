var generateColor = function() {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex() {
    return componentToHex(randNum()) + componentToHex(randNum()) + componentToHex(randNum());
  }
  function randNum(){
    return Math.floor(Math.random() * 255)
  }
  // console.log(rgbToHex())
  return `#${rgbToHex()}`
};


console.log(generateColor()) 
// console.log(randNum())
// console.log(rgbToHex(3, 1, 4))