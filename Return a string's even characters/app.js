// 7 kata
function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
        return "invalid string";
    } else {
        string = string.split("").filter((item, index) => index % 2 !== 0);
        return string;
    }
}
console.log(evenChars("a"));
