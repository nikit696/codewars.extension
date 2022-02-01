function DNAtoRNA(dna) {
  dna = dna.split("")
  for (let i = 0; i < dna.length; i++){
    if (dna[i] === "T"){
      dna[i] = "U"
    }
  }
  return dna.join("")
  // create a function which returns an RNA sequence from the given DNA sequence
}