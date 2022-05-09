function DNAStrand(dna){
  if (dna.length === 0){
    return dna
  }
  dna = dna.split("")
  for (let i = 0; i < dna.length; i++){
    if (dna[i] === "A"){
      dna[i] = "T"
      } else if (dna[i] === "T"){
        dna[i] = "A"
      } else if (dna[i] === "C"){
        dna[i] = "G"
      } else {
        dna[i] = "C"
      }
    }
  return dna.join("")
  }