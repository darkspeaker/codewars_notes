function duplicateEncode(word){
    word = word.toLowerCase()
    let resWord = ''
    for(let i = 0; i < word.length; i++){
        if (word.split(word[i]).length-1 > 1){
            resWord += ')'
        }
        else{
            resWord += '('
        }
    }
    return resWord
}
console.log(duplicateEncode("(( @"))

// )())())
// (()) ())