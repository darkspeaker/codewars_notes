// 5 kata
function validate(password) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g.test(password);
}
console.log(validate('1djI38D55'))