function DNAStrand(dna){
  dna = dna.split('').map(letter => {
    console.log(letter)
    switch(letter){
      case 'A':
        letter = "T"
        
      case 'T':
        letter = "A"
        
      case 'C':
        letter = "G"
        
      case 'G':
        letter = "C"
        
    }
  })
  console.log(dna)
  // return dna
}
console.log(DNAStrand('ATTGC'))
// T => A
// A => T
// C => G
// G => C


//TAACG